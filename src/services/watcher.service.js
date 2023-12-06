import { utilService } from './util.service.js'
import { storageService } from './async-storage.service.js'

const WATCHER_KEY = 'watcherDB'

export const watcherService = {
    query,
    get,
    loadWatchers,
    remove,
    save,
    getEmptyWatcher,
    getNextWatcherId,
}

async function query() {
    let watchers = await storageService.query(WATCHER_KEY);

    if (!watchers || watchers.length === 0) {
        watchers = _createWatchers();
        utilService.saveToStorage(WATCHER_KEY, watchers)
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

async function getNextWatcherId(watcherId) {
    const watchers = await storageService.query(WATCHER_KEY)
    var idx = watchers.findIndex(watcher => watcher.id === watcherId)
    if (idx === watchers.length - 1) idx = -1
    return watchers[idx + 1].id
}

function _createWatchers() {
        const watchers = []
        watchers.push(_createWatcher('puki', ['Rambo', 'Rocky']))
        watchers.push(_createWatcher('muki', ['Rambo', 'Rocky']))
        watchers.push(_createWatcher('shuki', ['Rambo', 'Rocky']))
        
        return watchers
}

function _createWatcher(fullName, movies) {
    const watcher = getEmptyWatcher(fullName, movies)
    watcher.id = utilService.makeId()
    return watcher
}