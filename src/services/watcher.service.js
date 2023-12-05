import { utilService } from './util.service.js'
import { storageService } from './async-storage.service.js'

const WATCHER_KEY = 'watcherDB'
var gFilterBy = { txt: '', movies: [] }


export const watcherService = {
    query,
    get,
    loadWatchers,
    remove,
    save,
    getEmptyWatcher,
    getNextWatcherId,
    getFilterBy,
    setFilterBy,
    createWatchers
}

async function query() {
    let watchers = await storageService.query(WATCHER_KEY);

    if (gFilterBy.txt) {
        const regex = new RegExp(gFilterBy.txt, 'i');
        watchers = watchers.filter(watcher => regex.test(watcher.fullName));
    }

    if (gFilterBy.movies && gFilterBy.movies.length > 0) {
        watchers = watchers.filter(watcher =>
            gFilterBy.movies.every(movie => watcher.movies.includes(movie))
        );
    }
    return watchers;
}

function get(watcherId) {
    return storageService.get(WATCHER_KEY, watcherId)
}

async function loadWatchers() {
    let watchers = await storageService.query(WATCHER_KEY)
    return watchers
}

function remove(watcherId) {
    return storageService.remove(WATCHER_KEY, watcherId)
}

function save(watcher) {
    if (watcher.id) {
        return storageService.put(WATCHER_KEY, watcher)
    } else {
        return storageService.post(WATCHER_KEY, watcher)
    }
}

function getEmptyWatcher(fullName = '', movies = []) {
    return { id: '', fullName, movies }
}

function getFilterBy() {
    return { ...gFilterBy }
}

function setFilterBy(filterBy = {}) {
    if (filterBy.txt !== undefined) gFilterBy.txt = filterBy.txt
    if (filterBy.movies !== undefined) gFilterBy.movies = filterBy.movies
    return gFilterBy
}

async function getNextWatcherId(watcherId) {
    const watchers = await storageService.query(WATCHER_KEY)
    var idx = watchers.findIndex(watcher => watcher.id === watcherId)
    if (idx === watchers.length - 1) idx = -1
    return watchers[idx + 1].id
}

function createWatchers() {
    let watchers = utilService.loadFromStorage(WATCHER_KEY)
    if (!watchers || !watchers.length) {
        watchers = []
        watchers.push(_createWatcher('puki', ['Rambo', 'Rocky']))
        watchers.push(_createWatcher('muki', ['Rambo', 'Rocky']))
        watchers.push(_createWatcher('shuki', ['Rambo', 'Rocky']))
        utilService.saveToStorage(WATCHER_KEY, watchers)
    }
}

function _createWatcher(fullName, movies) {
    const watcher = getEmptyWatcher(fullName, movies)
    watcher.id = utilService.makeId()
    return watcher
}