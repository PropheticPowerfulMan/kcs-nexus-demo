const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-JVYUIPGg.js","assets/ui-Bam7IDm4.js","assets/vendor-Bh1Zu6gV.js","assets/schoolLevels-BLyIlbuz.js","assets/kcsPublicImages-BPz6k80a.js","assets/index-DUw0yv5u.js","assets/index-Dacvuulg.js","assets/index-DN6Lu900.js","assets/SearchField-CzMASTOO.js","assets/index-whNSkQgv.js","assets/types-Dln92dkD.js","assets/index-BZUSIXWW.js","assets/index-CQbFOC1M.js","assets/Login-D8mkGQx6.js","assets/index-C-KLeZAm.js","assets/PortalSidebar-BG40mUrr.js","assets/schoolEcosystem-DS0iF1Dm.js","assets/charts-LyKxUR06.js","assets/AITutor-r1hnAaqx.js","assets/StudentForum-DWobOj1p.js","assets/index-JodW7NUC.js","assets/ParentForum-CScvtHPS.js","assets/index-CaFk8Oy5.js","assets/index-BLdYFn70.js","assets/index-CidPp3ds.js"])))=>i.map(i=>d[i]);
var __defProp = Object.defineProperty;
var __typeError = (msg) => {
  throw TypeError(msg);
};
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateSet = (obj, member, value, setter) => (__accessCheck(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);
var __privateMethod = (obj, member, method) => (__accessCheck(obj, member, "access private method"), method);
var __privateWrapper = (obj, member, setter, getter) => ({
  set _(value) {
    __privateSet(obj, member, value, setter);
  },
  get _() {
    return __privateGet(obj, member, getter);
  }
});
var _focused, _cleanup, _setup, _a, _provider, _providerCalled, _b, _online, _cleanup2, _setup2, _c, _gcTimeout, _d, _initialState, _revertState, _cache, _client, _retryer, _defaultOptions, _abortSignalConsumed, _Query_instances, isInitialPausedFetch_fn, dispatch_fn, _e, _client2, _observers, _mutationCache, _retryer2, _Mutation_instances, dispatch_fn2, _f, _mutations, _scopes, _mutationId, _g, _queries, _h, _queryCache, _mutationCache2, _defaultOptions2, _queryDefaults, _mutationDefaults, _mountCount, _unsubscribeFocus, _unsubscribeOnline, _i;
import { j as jsxRuntimeExports, H as Home, U as Users, G as GraduationCap, N as Newspaper, B as BookOpen, I as Image, P as Phone, a as Globe, S as Sun, M as Moon, b as Bell, L as LogIn, X, c as Menu, A as AnimatePresence, m as motion, d as ArrowRight, F as Facebook, e as Instagram, Y as Youtube, f as Linkedin, g as MapPin, h as Mail, C as Clock, i as MessageCircle, k as Bot, l as Minimize2, n as User, o as Loader2, p as Send } from "./ui-Bam7IDm4.js";
import { a as reactDomExports, r as reactExports, g as getDefaultExportFromCjs, R as React$2, u as useLocation, L as Link, N as NavLink, O as Outlet, b as Navigate, d as Routes, e as Route, B as BrowserRouter } from "./vendor-Bh1Zu6gV.js";
(function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
    processPreload(link);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") {
        continue;
      }
      for (const node of mutation.addedNodes) {
        if (node.tagName === "LINK" && node.rel === "modulepreload")
          processPreload(node);
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function getFetchOpts(link) {
    const fetchOpts = {};
    if (link.integrity) fetchOpts.integrity = link.integrity;
    if (link.referrerPolicy) fetchOpts.referrerPolicy = link.referrerPolicy;
    if (link.crossOrigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (link.crossOrigin === "anonymous") fetchOpts.credentials = "omit";
    else fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep)
      return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
})();
var client = {};
var m = reactDomExports;
{
  client.createRoot = m.createRoot;
  client.hydrateRoot = m.hydrateRoot;
}
var Subscribable = class {
  constructor() {
    this.listeners = /* @__PURE__ */ new Set();
    this.subscribe = this.subscribe.bind(this);
  }
  subscribe(listener) {
    this.listeners.add(listener);
    this.onSubscribe();
    return () => {
      this.listeners.delete(listener);
      this.onUnsubscribe();
    };
  }
  hasListeners() {
    return this.listeners.size > 0;
  }
  onSubscribe() {
  }
  onUnsubscribe() {
  }
};
var FocusManager = (_a = class extends Subscribable {
  constructor() {
    super();
    __privateAdd(this, _focused);
    __privateAdd(this, _cleanup);
    __privateAdd(this, _setup);
    __privateSet(this, _setup, (onFocus) => {
      if (typeof window !== "undefined" && window.addEventListener) {
        const listener = () => onFocus();
        window.addEventListener("visibilitychange", listener, false);
        return () => {
          window.removeEventListener("visibilitychange", listener);
        };
      }
      return;
    });
  }
  onSubscribe() {
    if (!__privateGet(this, _cleanup)) {
      this.setEventListener(__privateGet(this, _setup));
    }
  }
  onUnsubscribe() {
    var _a2;
    if (!this.hasListeners()) {
      (_a2 = __privateGet(this, _cleanup)) == null ? void 0 : _a2.call(this);
      __privateSet(this, _cleanup, void 0);
    }
  }
  setEventListener(setup) {
    var _a2;
    __privateSet(this, _setup, setup);
    (_a2 = __privateGet(this, _cleanup)) == null ? void 0 : _a2.call(this);
    __privateSet(this, _cleanup, setup((focused) => {
      if (typeof focused === "boolean") {
        this.setFocused(focused);
      } else {
        this.onFocus();
      }
    }));
  }
  setFocused(focused) {
    const changed = __privateGet(this, _focused) !== focused;
    if (changed) {
      __privateSet(this, _focused, focused);
      this.onFocus();
    }
  }
  onFocus() {
    const isFocused = this.isFocused();
    this.listeners.forEach((listener) => {
      listener(isFocused);
    });
  }
  isFocused() {
    var _a2;
    if (typeof __privateGet(this, _focused) === "boolean") {
      return __privateGet(this, _focused);
    }
    return ((_a2 = globalThis.document) == null ? void 0 : _a2.visibilityState) !== "hidden";
  }
}, _focused = new WeakMap(), _cleanup = new WeakMap(), _setup = new WeakMap(), _a);
var focusManager = new FocusManager();
var defaultTimeoutProvider = {
  // We need the wrapper function syntax below instead of direct references to
  // global setTimeout etc.
  //
  // BAD: `setTimeout: setTimeout`
  // GOOD: `setTimeout: (cb, delay) => setTimeout(cb, delay)`
  //
  // If we use direct references here, then anything that wants to spy on or
  // replace the global setTimeout (like tests) won't work since we'll already
  // have a hard reference to the original implementation at the time when this
  // file was imported.
  setTimeout: (callback, delay) => setTimeout(callback, delay),
  clearTimeout: (timeoutId) => clearTimeout(timeoutId),
  setInterval: (callback, delay) => setInterval(callback, delay),
  clearInterval: (intervalId) => clearInterval(intervalId)
};
var TimeoutManager = (_b = class {
  constructor() {
    // We cannot have TimeoutManager<T> as we must instantiate it with a concrete
    // type at app boot; and if we leave that type, then any new timer provider
    // would need to support the default provider's concrete timer ID, which is
    // infeasible across environments.
    //
    // We settle for type safety for the TimeoutProvider type, and accept that
    // this class is unsafe internally to allow for extension.
    __privateAdd(this, _provider, defaultTimeoutProvider);
    __privateAdd(this, _providerCalled, false);
  }
  setTimeoutProvider(provider) {
    __privateSet(this, _provider, provider);
  }
  setTimeout(callback, delay) {
    return __privateGet(this, _provider).setTimeout(callback, delay);
  }
  clearTimeout(timeoutId) {
    __privateGet(this, _provider).clearTimeout(timeoutId);
  }
  setInterval(callback, delay) {
    return __privateGet(this, _provider).setInterval(callback, delay);
  }
  clearInterval(intervalId) {
    __privateGet(this, _provider).clearInterval(intervalId);
  }
}, _provider = new WeakMap(), _providerCalled = new WeakMap(), _b);
var timeoutManager = new TimeoutManager();
function systemSetTimeoutZero(callback) {
  setTimeout(callback, 0);
}
var isServer = typeof window === "undefined" || "Deno" in globalThis;
function noop$2() {
}
function functionalUpdate(updater, input) {
  return typeof updater === "function" ? updater(input) : updater;
}
function isValidTimeout(value) {
  return typeof value === "number" && value >= 0 && value !== Infinity;
}
function timeUntilStale(updatedAt, staleTime) {
  return Math.max(updatedAt + (staleTime || 0) - Date.now(), 0);
}
function resolveStaleTime(staleTime, query) {
  return typeof staleTime === "function" ? staleTime(query) : staleTime;
}
function resolveEnabled(enabled, query) {
  return typeof enabled === "function" ? enabled(query) : enabled;
}
function matchQuery(filters, query) {
  const {
    type = "all",
    exact,
    fetchStatus,
    predicate,
    queryKey,
    stale
  } = filters;
  if (queryKey) {
    if (exact) {
      if (query.queryHash !== hashQueryKeyByOptions(queryKey, query.options)) {
        return false;
      }
    } else if (!partialMatchKey(query.queryKey, queryKey)) {
      return false;
    }
  }
  if (type !== "all") {
    const isActive = query.isActive();
    if (type === "active" && !isActive) {
      return false;
    }
    if (type === "inactive" && isActive) {
      return false;
    }
  }
  if (typeof stale === "boolean" && query.isStale() !== stale) {
    return false;
  }
  if (fetchStatus && fetchStatus !== query.state.fetchStatus) {
    return false;
  }
  if (predicate && !predicate(query)) {
    return false;
  }
  return true;
}
function matchMutation(filters, mutation) {
  const { exact, status, predicate, mutationKey } = filters;
  if (mutationKey) {
    if (!mutation.options.mutationKey) {
      return false;
    }
    if (exact) {
      if (hashKey(mutation.options.mutationKey) !== hashKey(mutationKey)) {
        return false;
      }
    } else if (!partialMatchKey(mutation.options.mutationKey, mutationKey)) {
      return false;
    }
  }
  if (status && mutation.state.status !== status) {
    return false;
  }
  if (predicate && !predicate(mutation)) {
    return false;
  }
  return true;
}
function hashQueryKeyByOptions(queryKey, options) {
  const hashFn = (options == null ? void 0 : options.queryKeyHashFn) || hashKey;
  return hashFn(queryKey);
}
function hashKey(queryKey) {
  return JSON.stringify(
    queryKey,
    (_, val) => isPlainObject$1(val) ? Object.keys(val).sort().reduce((result, key) => {
      result[key] = val[key];
      return result;
    }, {}) : val
  );
}
function partialMatchKey(a, b) {
  if (a === b) {
    return true;
  }
  if (typeof a !== typeof b) {
    return false;
  }
  if (a && b && typeof a === "object" && typeof b === "object") {
    return Object.keys(b).every((key) => partialMatchKey(a[key], b[key]));
  }
  return false;
}
var hasOwn = Object.prototype.hasOwnProperty;
function replaceEqualDeep(a, b, depth = 0) {
  if (a === b) {
    return a;
  }
  if (depth > 500) return b;
  const array = isPlainArray(a) && isPlainArray(b);
  if (!array && !(isPlainObject$1(a) && isPlainObject$1(b))) return b;
  const aItems = array ? a : Object.keys(a);
  const aSize = aItems.length;
  const bItems = array ? b : Object.keys(b);
  const bSize = bItems.length;
  const copy2 = array ? new Array(bSize) : {};
  let equalItems = 0;
  for (let i = 0; i < bSize; i++) {
    const key = array ? i : bItems[i];
    const aItem = a[key];
    const bItem = b[key];
    if (aItem === bItem) {
      copy2[key] = aItem;
      if (array ? i < aSize : hasOwn.call(a, key)) equalItems++;
      continue;
    }
    if (aItem === null || bItem === null || typeof aItem !== "object" || typeof bItem !== "object") {
      copy2[key] = bItem;
      continue;
    }
    const v = replaceEqualDeep(aItem, bItem, depth + 1);
    copy2[key] = v;
    if (v === aItem) equalItems++;
  }
  return aSize === bSize && equalItems === aSize ? a : copy2;
}
function isPlainArray(value) {
  return Array.isArray(value) && value.length === Object.keys(value).length;
}
function isPlainObject$1(o) {
  if (!hasObjectPrototype(o)) {
    return false;
  }
  const ctor = o.constructor;
  if (ctor === void 0) {
    return true;
  }
  const prot = ctor.prototype;
  if (!hasObjectPrototype(prot)) {
    return false;
  }
  if (!prot.hasOwnProperty("isPrototypeOf")) {
    return false;
  }
  if (Object.getPrototypeOf(o) !== Object.prototype) {
    return false;
  }
  return true;
}
function hasObjectPrototype(o) {
  return Object.prototype.toString.call(o) === "[object Object]";
}
function sleep(timeout) {
  return new Promise((resolve) => {
    timeoutManager.setTimeout(resolve, timeout);
  });
}
function replaceData(prevData, data, options) {
  if (typeof options.structuralSharing === "function") {
    return options.structuralSharing(prevData, data);
  } else if (options.structuralSharing !== false) {
    return replaceEqualDeep(prevData, data);
  }
  return data;
}
function addToEnd(items, item, max = 0) {
  const newItems = [...items, item];
  return max && newItems.length > max ? newItems.slice(1) : newItems;
}
function addToStart(items, item, max = 0) {
  const newItems = [item, ...items];
  return max && newItems.length > max ? newItems.slice(0, -1) : newItems;
}
var skipToken = /* @__PURE__ */ Symbol();
function ensureQueryFn(options, fetchOptions) {
  if (!options.queryFn && (fetchOptions == null ? void 0 : fetchOptions.initialPromise)) {
    return () => fetchOptions.initialPromise;
  }
  if (!options.queryFn || options.queryFn === skipToken) {
    return () => Promise.reject(new Error(`Missing queryFn: '${options.queryHash}'`));
  }
  return options.queryFn;
}
function addConsumeAwareSignal(object, getSignal, onCancelled) {
  let consumed = false;
  let signal;
  Object.defineProperty(object, "signal", {
    enumerable: true,
    get: () => {
      signal ?? (signal = getSignal());
      if (consumed) {
        return signal;
      }
      consumed = true;
      if (signal.aborted) {
        onCancelled();
      } else {
        signal.addEventListener("abort", onCancelled, { once: true });
      }
      return signal;
    }
  });
  return object;
}
var environmentManager = /* @__PURE__ */ (() => {
  let isServerFn = () => isServer;
  return {
    /**
     * Returns whether the current runtime should be treated as a server environment.
     */
    isServer() {
      return isServerFn();
    },
    /**
     * Overrides the server check globally.
     */
    setIsServer(isServerValue) {
      isServerFn = isServerValue;
    }
  };
})();
function pendingThenable() {
  let resolve;
  let reject;
  const thenable = new Promise((_resolve, _reject) => {
    resolve = _resolve;
    reject = _reject;
  });
  thenable.status = "pending";
  thenable.catch(() => {
  });
  function finalize(data) {
    Object.assign(thenable, data);
    delete thenable.resolve;
    delete thenable.reject;
  }
  thenable.resolve = (value) => {
    finalize({
      status: "fulfilled",
      value
    });
    resolve(value);
  };
  thenable.reject = (reason) => {
    finalize({
      status: "rejected",
      reason
    });
    reject(reason);
  };
  return thenable;
}
var defaultScheduler = systemSetTimeoutZero;
function createNotifyManager() {
  let queue = [];
  let transactions = 0;
  let notifyFn = (callback) => {
    callback();
  };
  let batchNotifyFn = (callback) => {
    callback();
  };
  let scheduleFn = defaultScheduler;
  const schedule = (callback) => {
    if (transactions) {
      queue.push(callback);
    } else {
      scheduleFn(() => {
        notifyFn(callback);
      });
    }
  };
  const flush = () => {
    const originalQueue = queue;
    queue = [];
    if (originalQueue.length) {
      scheduleFn(() => {
        batchNotifyFn(() => {
          originalQueue.forEach((callback) => {
            notifyFn(callback);
          });
        });
      });
    }
  };
  return {
    batch: (callback) => {
      let result;
      transactions++;
      try {
        result = callback();
      } finally {
        transactions--;
        if (!transactions) {
          flush();
        }
      }
      return result;
    },
    /**
     * All calls to the wrapped function will be batched.
     */
    batchCalls: (callback) => {
      return (...args) => {
        schedule(() => {
          callback(...args);
        });
      };
    },
    schedule,
    /**
     * Use this method to set a custom notify function.
     * This can be used to for example wrap notifications with `React.act` while running tests.
     */
    setNotifyFunction: (fn) => {
      notifyFn = fn;
    },
    /**
     * Use this method to set a custom function to batch notifications together into a single tick.
     * By default React Query will use the batch function provided by ReactDOM or React Native.
     */
    setBatchNotifyFunction: (fn) => {
      batchNotifyFn = fn;
    },
    setScheduler: (fn) => {
      scheduleFn = fn;
    }
  };
}
var notifyManager = createNotifyManager();
var OnlineManager = (_c = class extends Subscribable {
  constructor() {
    super();
    __privateAdd(this, _online, true);
    __privateAdd(this, _cleanup2);
    __privateAdd(this, _setup2);
    __privateSet(this, _setup2, (onOnline) => {
      if (typeof window !== "undefined" && window.addEventListener) {
        const onlineListener = () => onOnline(true);
        const offlineListener = () => onOnline(false);
        window.addEventListener("online", onlineListener, false);
        window.addEventListener("offline", offlineListener, false);
        return () => {
          window.removeEventListener("online", onlineListener);
          window.removeEventListener("offline", offlineListener);
        };
      }
      return;
    });
  }
  onSubscribe() {
    if (!__privateGet(this, _cleanup2)) {
      this.setEventListener(__privateGet(this, _setup2));
    }
  }
  onUnsubscribe() {
    var _a2;
    if (!this.hasListeners()) {
      (_a2 = __privateGet(this, _cleanup2)) == null ? void 0 : _a2.call(this);
      __privateSet(this, _cleanup2, void 0);
    }
  }
  setEventListener(setup) {
    var _a2;
    __privateSet(this, _setup2, setup);
    (_a2 = __privateGet(this, _cleanup2)) == null ? void 0 : _a2.call(this);
    __privateSet(this, _cleanup2, setup(this.setOnline.bind(this)));
  }
  setOnline(online) {
    const changed = __privateGet(this, _online) !== online;
    if (changed) {
      __privateSet(this, _online, online);
      this.listeners.forEach((listener) => {
        listener(online);
      });
    }
  }
  isOnline() {
    return __privateGet(this, _online);
  }
}, _online = new WeakMap(), _cleanup2 = new WeakMap(), _setup2 = new WeakMap(), _c);
var onlineManager = new OnlineManager();
function defaultRetryDelay(failureCount) {
  return Math.min(1e3 * 2 ** failureCount, 3e4);
}
function canFetch(networkMode) {
  return (networkMode ?? "online") === "online" ? onlineManager.isOnline() : true;
}
var CancelledError = class extends Error {
  constructor(options) {
    super("CancelledError");
    this.revert = options == null ? void 0 : options.revert;
    this.silent = options == null ? void 0 : options.silent;
  }
};
function createRetryer(config) {
  let isRetryCancelled = false;
  let failureCount = 0;
  let continueFn;
  const thenable = pendingThenable();
  const isResolved = () => thenable.status !== "pending";
  const cancel = (cancelOptions) => {
    var _a2;
    if (!isResolved()) {
      const error = new CancelledError(cancelOptions);
      reject(error);
      (_a2 = config.onCancel) == null ? void 0 : _a2.call(config, error);
    }
  };
  const cancelRetry = () => {
    isRetryCancelled = true;
  };
  const continueRetry = () => {
    isRetryCancelled = false;
  };
  const canContinue = () => focusManager.isFocused() && (config.networkMode === "always" || onlineManager.isOnline()) && config.canRun();
  const canStart = () => canFetch(config.networkMode) && config.canRun();
  const resolve = (value) => {
    if (!isResolved()) {
      continueFn == null ? void 0 : continueFn();
      thenable.resolve(value);
    }
  };
  const reject = (value) => {
    if (!isResolved()) {
      continueFn == null ? void 0 : continueFn();
      thenable.reject(value);
    }
  };
  const pause = () => {
    return new Promise((continueResolve) => {
      var _a2;
      continueFn = (value) => {
        if (isResolved() || canContinue()) {
          continueResolve(value);
        }
      };
      (_a2 = config.onPause) == null ? void 0 : _a2.call(config);
    }).then(() => {
      var _a2;
      continueFn = void 0;
      if (!isResolved()) {
        (_a2 = config.onContinue) == null ? void 0 : _a2.call(config);
      }
    });
  };
  const run = () => {
    if (isResolved()) {
      return;
    }
    let promiseOrValue;
    const initialPromise = failureCount === 0 ? config.initialPromise : void 0;
    try {
      promiseOrValue = initialPromise ?? config.fn();
    } catch (error) {
      promiseOrValue = Promise.reject(error);
    }
    Promise.resolve(promiseOrValue).then(resolve).catch((error) => {
      var _a2;
      if (isResolved()) {
        return;
      }
      const retry = config.retry ?? (environmentManager.isServer() ? 0 : 3);
      const retryDelay = config.retryDelay ?? defaultRetryDelay;
      const delay = typeof retryDelay === "function" ? retryDelay(failureCount, error) : retryDelay;
      const shouldRetry = retry === true || typeof retry === "number" && failureCount < retry || typeof retry === "function" && retry(failureCount, error);
      if (isRetryCancelled || !shouldRetry) {
        reject(error);
        return;
      }
      failureCount++;
      (_a2 = config.onFail) == null ? void 0 : _a2.call(config, failureCount, error);
      sleep(delay).then(() => {
        return canContinue() ? void 0 : pause();
      }).then(() => {
        if (isRetryCancelled) {
          reject(error);
        } else {
          run();
        }
      });
    });
  };
  return {
    promise: thenable,
    status: () => thenable.status,
    cancel,
    continue: () => {
      continueFn == null ? void 0 : continueFn();
      return thenable;
    },
    cancelRetry,
    continueRetry,
    canStart,
    start: () => {
      if (canStart()) {
        run();
      } else {
        pause().then(run);
      }
      return thenable;
    }
  };
}
var Removable = (_d = class {
  constructor() {
    __privateAdd(this, _gcTimeout);
  }
  destroy() {
    this.clearGcTimeout();
  }
  scheduleGc() {
    this.clearGcTimeout();
    if (isValidTimeout(this.gcTime)) {
      __privateSet(this, _gcTimeout, timeoutManager.setTimeout(() => {
        this.optionalRemove();
      }, this.gcTime));
    }
  }
  updateGcTime(newGcTime) {
    this.gcTime = Math.max(
      this.gcTime || 0,
      newGcTime ?? (environmentManager.isServer() ? Infinity : 5 * 60 * 1e3)
    );
  }
  clearGcTimeout() {
    if (__privateGet(this, _gcTimeout) !== void 0) {
      timeoutManager.clearTimeout(__privateGet(this, _gcTimeout));
      __privateSet(this, _gcTimeout, void 0);
    }
  }
}, _gcTimeout = new WeakMap(), _d);
var Query = (_e = class extends Removable {
  constructor(config) {
    super();
    __privateAdd(this, _Query_instances);
    __privateAdd(this, _initialState);
    __privateAdd(this, _revertState);
    __privateAdd(this, _cache);
    __privateAdd(this, _client);
    __privateAdd(this, _retryer);
    __privateAdd(this, _defaultOptions);
    __privateAdd(this, _abortSignalConsumed);
    __privateSet(this, _abortSignalConsumed, false);
    __privateSet(this, _defaultOptions, config.defaultOptions);
    this.setOptions(config.options);
    this.observers = [];
    __privateSet(this, _client, config.client);
    __privateSet(this, _cache, __privateGet(this, _client).getQueryCache());
    this.queryKey = config.queryKey;
    this.queryHash = config.queryHash;
    __privateSet(this, _initialState, getDefaultState$1(this.options));
    this.state = config.state ?? __privateGet(this, _initialState);
    this.scheduleGc();
  }
  get meta() {
    return this.options.meta;
  }
  get promise() {
    var _a2;
    return (_a2 = __privateGet(this, _retryer)) == null ? void 0 : _a2.promise;
  }
  setOptions(options) {
    this.options = { ...__privateGet(this, _defaultOptions), ...options };
    this.updateGcTime(this.options.gcTime);
    if (this.state && this.state.data === void 0) {
      const defaultState = getDefaultState$1(this.options);
      if (defaultState.data !== void 0) {
        this.setState(
          successState(defaultState.data, defaultState.dataUpdatedAt)
        );
        __privateSet(this, _initialState, defaultState);
      }
    }
  }
  optionalRemove() {
    if (!this.observers.length && this.state.fetchStatus === "idle") {
      __privateGet(this, _cache).remove(this);
    }
  }
  setData(newData, options) {
    const data = replaceData(this.state.data, newData, this.options);
    __privateMethod(this, _Query_instances, dispatch_fn).call(this, {
      data,
      type: "success",
      dataUpdatedAt: options == null ? void 0 : options.updatedAt,
      manual: options == null ? void 0 : options.manual
    });
    return data;
  }
  setState(state, setStateOptions) {
    __privateMethod(this, _Query_instances, dispatch_fn).call(this, { type: "setState", state, setStateOptions });
  }
  cancel(options) {
    var _a2, _b2;
    const promise = (_a2 = __privateGet(this, _retryer)) == null ? void 0 : _a2.promise;
    (_b2 = __privateGet(this, _retryer)) == null ? void 0 : _b2.cancel(options);
    return promise ? promise.then(noop$2).catch(noop$2) : Promise.resolve();
  }
  destroy() {
    super.destroy();
    this.cancel({ silent: true });
  }
  get resetState() {
    return __privateGet(this, _initialState);
  }
  reset() {
    this.destroy();
    this.setState(this.resetState);
  }
  isActive() {
    return this.observers.some(
      (observer) => resolveEnabled(observer.options.enabled, this) !== false
    );
  }
  isDisabled() {
    if (this.getObserversCount() > 0) {
      return !this.isActive();
    }
    return this.options.queryFn === skipToken || !this.isFetched();
  }
  isFetched() {
    return this.state.dataUpdateCount + this.state.errorUpdateCount > 0;
  }
  isStatic() {
    if (this.getObserversCount() > 0) {
      return this.observers.some(
        (observer) => resolveStaleTime(observer.options.staleTime, this) === "static"
      );
    }
    return false;
  }
  isStale() {
    if (this.getObserversCount() > 0) {
      return this.observers.some(
        (observer) => observer.getCurrentResult().isStale
      );
    }
    return this.state.data === void 0 || this.state.isInvalidated;
  }
  isStaleByTime(staleTime = 0) {
    if (this.state.data === void 0) {
      return true;
    }
    if (staleTime === "static") {
      return false;
    }
    if (this.state.isInvalidated) {
      return true;
    }
    return !timeUntilStale(this.state.dataUpdatedAt, staleTime);
  }
  onFocus() {
    var _a2;
    const observer = this.observers.find((x) => x.shouldFetchOnWindowFocus());
    observer == null ? void 0 : observer.refetch({ cancelRefetch: false });
    (_a2 = __privateGet(this, _retryer)) == null ? void 0 : _a2.continue();
  }
  onOnline() {
    var _a2;
    const observer = this.observers.find((x) => x.shouldFetchOnReconnect());
    observer == null ? void 0 : observer.refetch({ cancelRefetch: false });
    (_a2 = __privateGet(this, _retryer)) == null ? void 0 : _a2.continue();
  }
  addObserver(observer) {
    if (!this.observers.includes(observer)) {
      this.observers.push(observer);
      this.clearGcTimeout();
      __privateGet(this, _cache).notify({ type: "observerAdded", query: this, observer });
    }
  }
  removeObserver(observer) {
    if (this.observers.includes(observer)) {
      this.observers = this.observers.filter((x) => x !== observer);
      if (!this.observers.length) {
        if (__privateGet(this, _retryer)) {
          if (__privateGet(this, _abortSignalConsumed) || __privateMethod(this, _Query_instances, isInitialPausedFetch_fn).call(this)) {
            __privateGet(this, _retryer).cancel({ revert: true });
          } else {
            __privateGet(this, _retryer).cancelRetry();
          }
        }
        this.scheduleGc();
      }
      __privateGet(this, _cache).notify({ type: "observerRemoved", query: this, observer });
    }
  }
  getObserversCount() {
    return this.observers.length;
  }
  invalidate() {
    if (!this.state.isInvalidated) {
      __privateMethod(this, _Query_instances, dispatch_fn).call(this, { type: "invalidate" });
    }
  }
  async fetch(options, fetchOptions) {
    var _a2, _b2, _c2, _d2, _e2, _f2, _g2, _h2, _i2, _j, _k, _l;
    if (this.state.fetchStatus !== "idle" && // If the promise in the retryer is already rejected, we have to definitely
    // re-start the fetch; there is a chance that the query is still in a
    // pending state when that happens
    ((_a2 = __privateGet(this, _retryer)) == null ? void 0 : _a2.status()) !== "rejected") {
      if (this.state.data !== void 0 && (fetchOptions == null ? void 0 : fetchOptions.cancelRefetch)) {
        this.cancel({ silent: true });
      } else if (__privateGet(this, _retryer)) {
        __privateGet(this, _retryer).continueRetry();
        return __privateGet(this, _retryer).promise;
      }
    }
    if (options) {
      this.setOptions(options);
    }
    if (!this.options.queryFn) {
      const observer = this.observers.find((x) => x.options.queryFn);
      if (observer) {
        this.setOptions(observer.options);
      }
    }
    const abortController = new AbortController();
    const addSignalProperty = (object) => {
      Object.defineProperty(object, "signal", {
        enumerable: true,
        get: () => {
          __privateSet(this, _abortSignalConsumed, true);
          return abortController.signal;
        }
      });
    };
    const fetchFn = () => {
      const queryFn = ensureQueryFn(this.options, fetchOptions);
      const createQueryFnContext = () => {
        const queryFnContext2 = {
          client: __privateGet(this, _client),
          queryKey: this.queryKey,
          meta: this.meta
        };
        addSignalProperty(queryFnContext2);
        return queryFnContext2;
      };
      const queryFnContext = createQueryFnContext();
      __privateSet(this, _abortSignalConsumed, false);
      if (this.options.persister) {
        return this.options.persister(
          queryFn,
          queryFnContext,
          this
        );
      }
      return queryFn(queryFnContext);
    };
    const createFetchContext = () => {
      const context2 = {
        fetchOptions,
        options: this.options,
        queryKey: this.queryKey,
        client: __privateGet(this, _client),
        state: this.state,
        fetchFn
      };
      addSignalProperty(context2);
      return context2;
    };
    const context = createFetchContext();
    (_b2 = this.options.behavior) == null ? void 0 : _b2.onFetch(context, this);
    __privateSet(this, _revertState, this.state);
    if (this.state.fetchStatus === "idle" || this.state.fetchMeta !== ((_c2 = context.fetchOptions) == null ? void 0 : _c2.meta)) {
      __privateMethod(this, _Query_instances, dispatch_fn).call(this, { type: "fetch", meta: (_d2 = context.fetchOptions) == null ? void 0 : _d2.meta });
    }
    __privateSet(this, _retryer, createRetryer({
      initialPromise: fetchOptions == null ? void 0 : fetchOptions.initialPromise,
      fn: context.fetchFn,
      onCancel: (error) => {
        if (error instanceof CancelledError && error.revert) {
          this.setState({
            ...__privateGet(this, _revertState),
            fetchStatus: "idle"
          });
        }
        abortController.abort();
      },
      onFail: (failureCount, error) => {
        __privateMethod(this, _Query_instances, dispatch_fn).call(this, { type: "failed", failureCount, error });
      },
      onPause: () => {
        __privateMethod(this, _Query_instances, dispatch_fn).call(this, { type: "pause" });
      },
      onContinue: () => {
        __privateMethod(this, _Query_instances, dispatch_fn).call(this, { type: "continue" });
      },
      retry: context.options.retry,
      retryDelay: context.options.retryDelay,
      networkMode: context.options.networkMode,
      canRun: () => true
    }));
    try {
      const data = await __privateGet(this, _retryer).start();
      if (data === void 0) {
        if (false) ;
        throw new Error(`${this.queryHash} data is undefined`);
      }
      this.setData(data);
      (_f2 = (_e2 = __privateGet(this, _cache).config).onSuccess) == null ? void 0 : _f2.call(_e2, data, this);
      (_h2 = (_g2 = __privateGet(this, _cache).config).onSettled) == null ? void 0 : _h2.call(
        _g2,
        data,
        this.state.error,
        this
      );
      return data;
    } catch (error) {
      if (error instanceof CancelledError) {
        if (error.silent) {
          return __privateGet(this, _retryer).promise;
        } else if (error.revert) {
          if (this.state.data === void 0) {
            throw error;
          }
          return this.state.data;
        }
      }
      __privateMethod(this, _Query_instances, dispatch_fn).call(this, {
        type: "error",
        error
      });
      (_j = (_i2 = __privateGet(this, _cache).config).onError) == null ? void 0 : _j.call(
        _i2,
        error,
        this
      );
      (_l = (_k = __privateGet(this, _cache).config).onSettled) == null ? void 0 : _l.call(
        _k,
        this.state.data,
        error,
        this
      );
      throw error;
    } finally {
      this.scheduleGc();
    }
  }
}, _initialState = new WeakMap(), _revertState = new WeakMap(), _cache = new WeakMap(), _client = new WeakMap(), _retryer = new WeakMap(), _defaultOptions = new WeakMap(), _abortSignalConsumed = new WeakMap(), _Query_instances = new WeakSet(), isInitialPausedFetch_fn = function() {
  return this.state.fetchStatus === "paused" && this.state.status === "pending";
}, dispatch_fn = function(action) {
  const reducer = (state) => {
    switch (action.type) {
      case "failed":
        return {
          ...state,
          fetchFailureCount: action.failureCount,
          fetchFailureReason: action.error
        };
      case "pause":
        return {
          ...state,
          fetchStatus: "paused"
        };
      case "continue":
        return {
          ...state,
          fetchStatus: "fetching"
        };
      case "fetch":
        return {
          ...state,
          ...fetchState(state.data, this.options),
          fetchMeta: action.meta ?? null
        };
      case "success":
        const newState = {
          ...state,
          ...successState(action.data, action.dataUpdatedAt),
          dataUpdateCount: state.dataUpdateCount + 1,
          ...!action.manual && {
            fetchStatus: "idle",
            fetchFailureCount: 0,
            fetchFailureReason: null
          }
        };
        __privateSet(this, _revertState, action.manual ? newState : void 0);
        return newState;
      case "error":
        const error = action.error;
        return {
          ...state,
          error,
          errorUpdateCount: state.errorUpdateCount + 1,
          errorUpdatedAt: Date.now(),
          fetchFailureCount: state.fetchFailureCount + 1,
          fetchFailureReason: error,
          fetchStatus: "idle",
          status: "error",
          // flag existing data as invalidated if we get a background error
          // note that "no data" always means stale so we can set unconditionally here
          isInvalidated: true
        };
      case "invalidate":
        return {
          ...state,
          isInvalidated: true
        };
      case "setState":
        return {
          ...state,
          ...action.state
        };
    }
  };
  this.state = reducer(this.state);
  notifyManager.batch(() => {
    this.observers.forEach((observer) => {
      observer.onQueryUpdate();
    });
    __privateGet(this, _cache).notify({ query: this, type: "updated", action });
  });
}, _e);
function fetchState(data, options) {
  return {
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchStatus: canFetch(options.networkMode) ? "fetching" : "paused",
    ...data === void 0 && {
      error: null,
      status: "pending"
    }
  };
}
function successState(data, dataUpdatedAt) {
  return {
    data,
    dataUpdatedAt: dataUpdatedAt ?? Date.now(),
    error: null,
    isInvalidated: false,
    status: "success"
  };
}
function getDefaultState$1(options) {
  const data = typeof options.initialData === "function" ? options.initialData() : options.initialData;
  const hasData = data !== void 0;
  const initialDataUpdatedAt = hasData ? typeof options.initialDataUpdatedAt === "function" ? options.initialDataUpdatedAt() : options.initialDataUpdatedAt : 0;
  return {
    data,
    dataUpdateCount: 0,
    dataUpdatedAt: hasData ? initialDataUpdatedAt ?? Date.now() : 0,
    error: null,
    errorUpdateCount: 0,
    errorUpdatedAt: 0,
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchMeta: null,
    isInvalidated: false,
    status: hasData ? "success" : "pending",
    fetchStatus: "idle"
  };
}
function infiniteQueryBehavior(pages) {
  return {
    onFetch: (context, query) => {
      var _a2, _b2, _c2, _d2, _e2;
      const options = context.options;
      const direction = (_c2 = (_b2 = (_a2 = context.fetchOptions) == null ? void 0 : _a2.meta) == null ? void 0 : _b2.fetchMore) == null ? void 0 : _c2.direction;
      const oldPages = ((_d2 = context.state.data) == null ? void 0 : _d2.pages) || [];
      const oldPageParams = ((_e2 = context.state.data) == null ? void 0 : _e2.pageParams) || [];
      let result = { pages: [], pageParams: [] };
      let currentPage = 0;
      const fetchFn = async () => {
        let cancelled = false;
        const addSignalProperty = (object) => {
          addConsumeAwareSignal(
            object,
            () => context.signal,
            () => cancelled = true
          );
        };
        const queryFn = ensureQueryFn(context.options, context.fetchOptions);
        const fetchPage = async (data, param, previous) => {
          if (cancelled) {
            return Promise.reject();
          }
          if (param == null && data.pages.length) {
            return Promise.resolve(data);
          }
          const createQueryFnContext = () => {
            const queryFnContext2 = {
              client: context.client,
              queryKey: context.queryKey,
              pageParam: param,
              direction: previous ? "backward" : "forward",
              meta: context.options.meta
            };
            addSignalProperty(queryFnContext2);
            return queryFnContext2;
          };
          const queryFnContext = createQueryFnContext();
          const page = await queryFn(queryFnContext);
          const { maxPages } = context.options;
          const addTo = previous ? addToStart : addToEnd;
          return {
            pages: addTo(data.pages, page, maxPages),
            pageParams: addTo(data.pageParams, param, maxPages)
          };
        };
        if (direction && oldPages.length) {
          const previous = direction === "backward";
          const pageParamFn = previous ? getPreviousPageParam : getNextPageParam;
          const oldData = {
            pages: oldPages,
            pageParams: oldPageParams
          };
          const param = pageParamFn(options, oldData);
          result = await fetchPage(oldData, param, previous);
        } else {
          const remainingPages = pages ?? oldPages.length;
          do {
            const param = currentPage === 0 ? oldPageParams[0] ?? options.initialPageParam : getNextPageParam(options, result);
            if (currentPage > 0 && param == null) {
              break;
            }
            result = await fetchPage(result, param);
            currentPage++;
          } while (currentPage < remainingPages);
        }
        return result;
      };
      if (context.options.persister) {
        context.fetchFn = () => {
          var _a3, _b3;
          return (_b3 = (_a3 = context.options).persister) == null ? void 0 : _b3.call(
            _a3,
            fetchFn,
            {
              client: context.client,
              queryKey: context.queryKey,
              meta: context.options.meta,
              signal: context.signal
            },
            query
          );
        };
      } else {
        context.fetchFn = fetchFn;
      }
    }
  };
}
function getNextPageParam(options, { pages, pageParams }) {
  const lastIndex = pages.length - 1;
  return pages.length > 0 ? options.getNextPageParam(
    pages[lastIndex],
    pages,
    pageParams[lastIndex],
    pageParams
  ) : void 0;
}
function getPreviousPageParam(options, { pages, pageParams }) {
  var _a2;
  return pages.length > 0 ? (_a2 = options.getPreviousPageParam) == null ? void 0 : _a2.call(options, pages[0], pages, pageParams[0], pageParams) : void 0;
}
var Mutation = (_f = class extends Removable {
  constructor(config) {
    super();
    __privateAdd(this, _Mutation_instances);
    __privateAdd(this, _client2);
    __privateAdd(this, _observers);
    __privateAdd(this, _mutationCache);
    __privateAdd(this, _retryer2);
    __privateSet(this, _client2, config.client);
    this.mutationId = config.mutationId;
    __privateSet(this, _mutationCache, config.mutationCache);
    __privateSet(this, _observers, []);
    this.state = config.state || getDefaultState();
    this.setOptions(config.options);
    this.scheduleGc();
  }
  setOptions(options) {
    this.options = options;
    this.updateGcTime(this.options.gcTime);
  }
  get meta() {
    return this.options.meta;
  }
  addObserver(observer) {
    if (!__privateGet(this, _observers).includes(observer)) {
      __privateGet(this, _observers).push(observer);
      this.clearGcTimeout();
      __privateGet(this, _mutationCache).notify({
        type: "observerAdded",
        mutation: this,
        observer
      });
    }
  }
  removeObserver(observer) {
    __privateSet(this, _observers, __privateGet(this, _observers).filter((x) => x !== observer));
    this.scheduleGc();
    __privateGet(this, _mutationCache).notify({
      type: "observerRemoved",
      mutation: this,
      observer
    });
  }
  optionalRemove() {
    if (!__privateGet(this, _observers).length) {
      if (this.state.status === "pending") {
        this.scheduleGc();
      } else {
        __privateGet(this, _mutationCache).remove(this);
      }
    }
  }
  continue() {
    var _a2;
    return ((_a2 = __privateGet(this, _retryer2)) == null ? void 0 : _a2.continue()) ?? // continuing a mutation assumes that variables are set, mutation must have been dehydrated before
    this.execute(this.state.variables);
  }
  async execute(variables) {
    var _a2, _b2, _c2, _d2, _e2, _f2, _g2, _h2, _i2, _j, _k, _l, _m, _n, _o, _p, _q, _r;
    const onContinue = () => {
      __privateMethod(this, _Mutation_instances, dispatch_fn2).call(this, { type: "continue" });
    };
    const mutationFnContext = {
      client: __privateGet(this, _client2),
      meta: this.options.meta,
      mutationKey: this.options.mutationKey
    };
    __privateSet(this, _retryer2, createRetryer({
      fn: () => {
        if (!this.options.mutationFn) {
          return Promise.reject(new Error("No mutationFn found"));
        }
        return this.options.mutationFn(variables, mutationFnContext);
      },
      onFail: (failureCount, error) => {
        __privateMethod(this, _Mutation_instances, dispatch_fn2).call(this, { type: "failed", failureCount, error });
      },
      onPause: () => {
        __privateMethod(this, _Mutation_instances, dispatch_fn2).call(this, { type: "pause" });
      },
      onContinue,
      retry: this.options.retry ?? 0,
      retryDelay: this.options.retryDelay,
      networkMode: this.options.networkMode,
      canRun: () => __privateGet(this, _mutationCache).canRun(this)
    }));
    const restored = this.state.status === "pending";
    const isPaused = !__privateGet(this, _retryer2).canStart();
    try {
      if (restored) {
        onContinue();
      } else {
        __privateMethod(this, _Mutation_instances, dispatch_fn2).call(this, { type: "pending", variables, isPaused });
        if (__privateGet(this, _mutationCache).config.onMutate) {
          await __privateGet(this, _mutationCache).config.onMutate(
            variables,
            this,
            mutationFnContext
          );
        }
        const context = await ((_b2 = (_a2 = this.options).onMutate) == null ? void 0 : _b2.call(
          _a2,
          variables,
          mutationFnContext
        ));
        if (context !== this.state.context) {
          __privateMethod(this, _Mutation_instances, dispatch_fn2).call(this, {
            type: "pending",
            context,
            variables,
            isPaused
          });
        }
      }
      const data = await __privateGet(this, _retryer2).start();
      await ((_d2 = (_c2 = __privateGet(this, _mutationCache).config).onSuccess) == null ? void 0 : _d2.call(
        _c2,
        data,
        variables,
        this.state.context,
        this,
        mutationFnContext
      ));
      await ((_f2 = (_e2 = this.options).onSuccess) == null ? void 0 : _f2.call(
        _e2,
        data,
        variables,
        this.state.context,
        mutationFnContext
      ));
      await ((_h2 = (_g2 = __privateGet(this, _mutationCache).config).onSettled) == null ? void 0 : _h2.call(
        _g2,
        data,
        null,
        this.state.variables,
        this.state.context,
        this,
        mutationFnContext
      ));
      await ((_j = (_i2 = this.options).onSettled) == null ? void 0 : _j.call(
        _i2,
        data,
        null,
        variables,
        this.state.context,
        mutationFnContext
      ));
      __privateMethod(this, _Mutation_instances, dispatch_fn2).call(this, { type: "success", data });
      return data;
    } catch (error) {
      try {
        await ((_l = (_k = __privateGet(this, _mutationCache).config).onError) == null ? void 0 : _l.call(
          _k,
          error,
          variables,
          this.state.context,
          this,
          mutationFnContext
        ));
      } catch (e) {
        void Promise.reject(e);
      }
      try {
        await ((_n = (_m = this.options).onError) == null ? void 0 : _n.call(
          _m,
          error,
          variables,
          this.state.context,
          mutationFnContext
        ));
      } catch (e) {
        void Promise.reject(e);
      }
      try {
        await ((_p = (_o = __privateGet(this, _mutationCache).config).onSettled) == null ? void 0 : _p.call(
          _o,
          void 0,
          error,
          this.state.variables,
          this.state.context,
          this,
          mutationFnContext
        ));
      } catch (e) {
        void Promise.reject(e);
      }
      try {
        await ((_r = (_q = this.options).onSettled) == null ? void 0 : _r.call(
          _q,
          void 0,
          error,
          variables,
          this.state.context,
          mutationFnContext
        ));
      } catch (e) {
        void Promise.reject(e);
      }
      __privateMethod(this, _Mutation_instances, dispatch_fn2).call(this, { type: "error", error });
      throw error;
    } finally {
      __privateGet(this, _mutationCache).runNext(this);
    }
  }
}, _client2 = new WeakMap(), _observers = new WeakMap(), _mutationCache = new WeakMap(), _retryer2 = new WeakMap(), _Mutation_instances = new WeakSet(), dispatch_fn2 = function(action) {
  const reducer = (state) => {
    switch (action.type) {
      case "failed":
        return {
          ...state,
          failureCount: action.failureCount,
          failureReason: action.error
        };
      case "pause":
        return {
          ...state,
          isPaused: true
        };
      case "continue":
        return {
          ...state,
          isPaused: false
        };
      case "pending":
        return {
          ...state,
          context: action.context,
          data: void 0,
          failureCount: 0,
          failureReason: null,
          error: null,
          isPaused: action.isPaused,
          status: "pending",
          variables: action.variables,
          submittedAt: Date.now()
        };
      case "success":
        return {
          ...state,
          data: action.data,
          failureCount: 0,
          failureReason: null,
          error: null,
          status: "success",
          isPaused: false
        };
      case "error":
        return {
          ...state,
          data: void 0,
          error: action.error,
          failureCount: state.failureCount + 1,
          failureReason: action.error,
          isPaused: false,
          status: "error"
        };
    }
  };
  this.state = reducer(this.state);
  notifyManager.batch(() => {
    __privateGet(this, _observers).forEach((observer) => {
      observer.onMutationUpdate(action);
    });
    __privateGet(this, _mutationCache).notify({
      mutation: this,
      type: "updated",
      action
    });
  });
}, _f);
function getDefaultState() {
  return {
    context: void 0,
    data: void 0,
    error: null,
    failureCount: 0,
    failureReason: null,
    isPaused: false,
    status: "idle",
    variables: void 0,
    submittedAt: 0
  };
}
var MutationCache = (_g = class extends Subscribable {
  constructor(config = {}) {
    super();
    __privateAdd(this, _mutations);
    __privateAdd(this, _scopes);
    __privateAdd(this, _mutationId);
    this.config = config;
    __privateSet(this, _mutations, /* @__PURE__ */ new Set());
    __privateSet(this, _scopes, /* @__PURE__ */ new Map());
    __privateSet(this, _mutationId, 0);
  }
  build(client2, options, state) {
    const mutation = new Mutation({
      client: client2,
      mutationCache: this,
      mutationId: ++__privateWrapper(this, _mutationId)._,
      options: client2.defaultMutationOptions(options),
      state
    });
    this.add(mutation);
    return mutation;
  }
  add(mutation) {
    __privateGet(this, _mutations).add(mutation);
    const scope = scopeFor(mutation);
    if (typeof scope === "string") {
      const scopedMutations = __privateGet(this, _scopes).get(scope);
      if (scopedMutations) {
        scopedMutations.push(mutation);
      } else {
        __privateGet(this, _scopes).set(scope, [mutation]);
      }
    }
    this.notify({ type: "added", mutation });
  }
  remove(mutation) {
    if (__privateGet(this, _mutations).delete(mutation)) {
      const scope = scopeFor(mutation);
      if (typeof scope === "string") {
        const scopedMutations = __privateGet(this, _scopes).get(scope);
        if (scopedMutations) {
          if (scopedMutations.length > 1) {
            const index = scopedMutations.indexOf(mutation);
            if (index !== -1) {
              scopedMutations.splice(index, 1);
            }
          } else if (scopedMutations[0] === mutation) {
            __privateGet(this, _scopes).delete(scope);
          }
        }
      }
    }
    this.notify({ type: "removed", mutation });
  }
  canRun(mutation) {
    const scope = scopeFor(mutation);
    if (typeof scope === "string") {
      const mutationsWithSameScope = __privateGet(this, _scopes).get(scope);
      const firstPendingMutation = mutationsWithSameScope == null ? void 0 : mutationsWithSameScope.find(
        (m2) => m2.state.status === "pending"
      );
      return !firstPendingMutation || firstPendingMutation === mutation;
    } else {
      return true;
    }
  }
  runNext(mutation) {
    var _a2;
    const scope = scopeFor(mutation);
    if (typeof scope === "string") {
      const foundMutation = (_a2 = __privateGet(this, _scopes).get(scope)) == null ? void 0 : _a2.find((m2) => m2 !== mutation && m2.state.isPaused);
      return (foundMutation == null ? void 0 : foundMutation.continue()) ?? Promise.resolve();
    } else {
      return Promise.resolve();
    }
  }
  clear() {
    notifyManager.batch(() => {
      __privateGet(this, _mutations).forEach((mutation) => {
        this.notify({ type: "removed", mutation });
      });
      __privateGet(this, _mutations).clear();
      __privateGet(this, _scopes).clear();
    });
  }
  getAll() {
    return Array.from(__privateGet(this, _mutations));
  }
  find(filters) {
    const defaultedFilters = { exact: true, ...filters };
    return this.getAll().find(
      (mutation) => matchMutation(defaultedFilters, mutation)
    );
  }
  findAll(filters = {}) {
    return this.getAll().filter((mutation) => matchMutation(filters, mutation));
  }
  notify(event) {
    notifyManager.batch(() => {
      this.listeners.forEach((listener) => {
        listener(event);
      });
    });
  }
  resumePausedMutations() {
    const pausedMutations = this.getAll().filter((x) => x.state.isPaused);
    return notifyManager.batch(
      () => Promise.all(
        pausedMutations.map((mutation) => mutation.continue().catch(noop$2))
      )
    );
  }
}, _mutations = new WeakMap(), _scopes = new WeakMap(), _mutationId = new WeakMap(), _g);
function scopeFor(mutation) {
  var _a2;
  return (_a2 = mutation.options.scope) == null ? void 0 : _a2.id;
}
var QueryCache = (_h = class extends Subscribable {
  constructor(config = {}) {
    super();
    __privateAdd(this, _queries);
    this.config = config;
    __privateSet(this, _queries, /* @__PURE__ */ new Map());
  }
  build(client2, options, state) {
    const queryKey = options.queryKey;
    const queryHash = options.queryHash ?? hashQueryKeyByOptions(queryKey, options);
    let query = this.get(queryHash);
    if (!query) {
      query = new Query({
        client: client2,
        queryKey,
        queryHash,
        options: client2.defaultQueryOptions(options),
        state,
        defaultOptions: client2.getQueryDefaults(queryKey)
      });
      this.add(query);
    }
    return query;
  }
  add(query) {
    if (!__privateGet(this, _queries).has(query.queryHash)) {
      __privateGet(this, _queries).set(query.queryHash, query);
      this.notify({
        type: "added",
        query
      });
    }
  }
  remove(query) {
    const queryInMap = __privateGet(this, _queries).get(query.queryHash);
    if (queryInMap) {
      query.destroy();
      if (queryInMap === query) {
        __privateGet(this, _queries).delete(query.queryHash);
      }
      this.notify({ type: "removed", query });
    }
  }
  clear() {
    notifyManager.batch(() => {
      this.getAll().forEach((query) => {
        this.remove(query);
      });
    });
  }
  get(queryHash) {
    return __privateGet(this, _queries).get(queryHash);
  }
  getAll() {
    return [...__privateGet(this, _queries).values()];
  }
  find(filters) {
    const defaultedFilters = { exact: true, ...filters };
    return this.getAll().find(
      (query) => matchQuery(defaultedFilters, query)
    );
  }
  findAll(filters = {}) {
    const queries = this.getAll();
    return Object.keys(filters).length > 0 ? queries.filter((query) => matchQuery(filters, query)) : queries;
  }
  notify(event) {
    notifyManager.batch(() => {
      this.listeners.forEach((listener) => {
        listener(event);
      });
    });
  }
  onFocus() {
    notifyManager.batch(() => {
      this.getAll().forEach((query) => {
        query.onFocus();
      });
    });
  }
  onOnline() {
    notifyManager.batch(() => {
      this.getAll().forEach((query) => {
        query.onOnline();
      });
    });
  }
}, _queries = new WeakMap(), _h);
var QueryClient = (_i = class {
  constructor(config = {}) {
    __privateAdd(this, _queryCache);
    __privateAdd(this, _mutationCache2);
    __privateAdd(this, _defaultOptions2);
    __privateAdd(this, _queryDefaults);
    __privateAdd(this, _mutationDefaults);
    __privateAdd(this, _mountCount);
    __privateAdd(this, _unsubscribeFocus);
    __privateAdd(this, _unsubscribeOnline);
    __privateSet(this, _queryCache, config.queryCache || new QueryCache());
    __privateSet(this, _mutationCache2, config.mutationCache || new MutationCache());
    __privateSet(this, _defaultOptions2, config.defaultOptions || {});
    __privateSet(this, _queryDefaults, /* @__PURE__ */ new Map());
    __privateSet(this, _mutationDefaults, /* @__PURE__ */ new Map());
    __privateSet(this, _mountCount, 0);
  }
  mount() {
    __privateWrapper(this, _mountCount)._++;
    if (__privateGet(this, _mountCount) !== 1) return;
    __privateSet(this, _unsubscribeFocus, focusManager.subscribe(async (focused) => {
      if (focused) {
        await this.resumePausedMutations();
        __privateGet(this, _queryCache).onFocus();
      }
    }));
    __privateSet(this, _unsubscribeOnline, onlineManager.subscribe(async (online) => {
      if (online) {
        await this.resumePausedMutations();
        __privateGet(this, _queryCache).onOnline();
      }
    }));
  }
  unmount() {
    var _a2, _b2;
    __privateWrapper(this, _mountCount)._--;
    if (__privateGet(this, _mountCount) !== 0) return;
    (_a2 = __privateGet(this, _unsubscribeFocus)) == null ? void 0 : _a2.call(this);
    __privateSet(this, _unsubscribeFocus, void 0);
    (_b2 = __privateGet(this, _unsubscribeOnline)) == null ? void 0 : _b2.call(this);
    __privateSet(this, _unsubscribeOnline, void 0);
  }
  isFetching(filters) {
    return __privateGet(this, _queryCache).findAll({ ...filters, fetchStatus: "fetching" }).length;
  }
  isMutating(filters) {
    return __privateGet(this, _mutationCache2).findAll({ ...filters, status: "pending" }).length;
  }
  /**
   * Imperative (non-reactive) way to retrieve data for a QueryKey.
   * Should only be used in callbacks or functions where reading the latest data is necessary, e.g. for optimistic updates.
   *
   * Hint: Do not use this function inside a component, because it won't receive updates.
   * Use `useQuery` to create a `QueryObserver` that subscribes to changes.
   */
  getQueryData(queryKey) {
    var _a2;
    const options = this.defaultQueryOptions({ queryKey });
    return (_a2 = __privateGet(this, _queryCache).get(options.queryHash)) == null ? void 0 : _a2.state.data;
  }
  ensureQueryData(options) {
    const defaultedOptions = this.defaultQueryOptions(options);
    const query = __privateGet(this, _queryCache).build(this, defaultedOptions);
    const cachedData = query.state.data;
    if (cachedData === void 0) {
      return this.fetchQuery(options);
    }
    if (options.revalidateIfStale && query.isStaleByTime(resolveStaleTime(defaultedOptions.staleTime, query))) {
      void this.prefetchQuery(defaultedOptions);
    }
    return Promise.resolve(cachedData);
  }
  getQueriesData(filters) {
    return __privateGet(this, _queryCache).findAll(filters).map(({ queryKey, state }) => {
      const data = state.data;
      return [queryKey, data];
    });
  }
  setQueryData(queryKey, updater, options) {
    const defaultedOptions = this.defaultQueryOptions({ queryKey });
    const query = __privateGet(this, _queryCache).get(
      defaultedOptions.queryHash
    );
    const prevData = query == null ? void 0 : query.state.data;
    const data = functionalUpdate(updater, prevData);
    if (data === void 0) {
      return void 0;
    }
    return __privateGet(this, _queryCache).build(this, defaultedOptions).setData(data, { ...options, manual: true });
  }
  setQueriesData(filters, updater, options) {
    return notifyManager.batch(
      () => __privateGet(this, _queryCache).findAll(filters).map(({ queryKey }) => [
        queryKey,
        this.setQueryData(queryKey, updater, options)
      ])
    );
  }
  getQueryState(queryKey) {
    var _a2;
    const options = this.defaultQueryOptions({ queryKey });
    return (_a2 = __privateGet(this, _queryCache).get(
      options.queryHash
    )) == null ? void 0 : _a2.state;
  }
  removeQueries(filters) {
    const queryCache = __privateGet(this, _queryCache);
    notifyManager.batch(() => {
      queryCache.findAll(filters).forEach((query) => {
        queryCache.remove(query);
      });
    });
  }
  resetQueries(filters, options) {
    const queryCache = __privateGet(this, _queryCache);
    return notifyManager.batch(() => {
      queryCache.findAll(filters).forEach((query) => {
        query.reset();
      });
      return this.refetchQueries(
        {
          type: "active",
          ...filters
        },
        options
      );
    });
  }
  cancelQueries(filters, cancelOptions = {}) {
    const defaultedCancelOptions = { revert: true, ...cancelOptions };
    const promises = notifyManager.batch(
      () => __privateGet(this, _queryCache).findAll(filters).map((query) => query.cancel(defaultedCancelOptions))
    );
    return Promise.all(promises).then(noop$2).catch(noop$2);
  }
  invalidateQueries(filters, options = {}) {
    return notifyManager.batch(() => {
      __privateGet(this, _queryCache).findAll(filters).forEach((query) => {
        query.invalidate();
      });
      if ((filters == null ? void 0 : filters.refetchType) === "none") {
        return Promise.resolve();
      }
      return this.refetchQueries(
        {
          ...filters,
          type: (filters == null ? void 0 : filters.refetchType) ?? (filters == null ? void 0 : filters.type) ?? "active"
        },
        options
      );
    });
  }
  refetchQueries(filters, options = {}) {
    const fetchOptions = {
      ...options,
      cancelRefetch: options.cancelRefetch ?? true
    };
    const promises = notifyManager.batch(
      () => __privateGet(this, _queryCache).findAll(filters).filter((query) => !query.isDisabled() && !query.isStatic()).map((query) => {
        let promise = query.fetch(void 0, fetchOptions);
        if (!fetchOptions.throwOnError) {
          promise = promise.catch(noop$2);
        }
        return query.state.fetchStatus === "paused" ? Promise.resolve() : promise;
      })
    );
    return Promise.all(promises).then(noop$2);
  }
  fetchQuery(options) {
    const defaultedOptions = this.defaultQueryOptions(options);
    if (defaultedOptions.retry === void 0) {
      defaultedOptions.retry = false;
    }
    const query = __privateGet(this, _queryCache).build(this, defaultedOptions);
    return query.isStaleByTime(
      resolveStaleTime(defaultedOptions.staleTime, query)
    ) ? query.fetch(defaultedOptions) : Promise.resolve(query.state.data);
  }
  prefetchQuery(options) {
    return this.fetchQuery(options).then(noop$2).catch(noop$2);
  }
  fetchInfiniteQuery(options) {
    options.behavior = infiniteQueryBehavior(options.pages);
    return this.fetchQuery(options);
  }
  prefetchInfiniteQuery(options) {
    return this.fetchInfiniteQuery(options).then(noop$2).catch(noop$2);
  }
  ensureInfiniteQueryData(options) {
    options.behavior = infiniteQueryBehavior(options.pages);
    return this.ensureQueryData(options);
  }
  resumePausedMutations() {
    if (onlineManager.isOnline()) {
      return __privateGet(this, _mutationCache2).resumePausedMutations();
    }
    return Promise.resolve();
  }
  getQueryCache() {
    return __privateGet(this, _queryCache);
  }
  getMutationCache() {
    return __privateGet(this, _mutationCache2);
  }
  getDefaultOptions() {
    return __privateGet(this, _defaultOptions2);
  }
  setDefaultOptions(options) {
    __privateSet(this, _defaultOptions2, options);
  }
  setQueryDefaults(queryKey, options) {
    __privateGet(this, _queryDefaults).set(hashKey(queryKey), {
      queryKey,
      defaultOptions: options
    });
  }
  getQueryDefaults(queryKey) {
    const defaults2 = [...__privateGet(this, _queryDefaults).values()];
    const result = {};
    defaults2.forEach((queryDefault) => {
      if (partialMatchKey(queryKey, queryDefault.queryKey)) {
        Object.assign(result, queryDefault.defaultOptions);
      }
    });
    return result;
  }
  setMutationDefaults(mutationKey, options) {
    __privateGet(this, _mutationDefaults).set(hashKey(mutationKey), {
      mutationKey,
      defaultOptions: options
    });
  }
  getMutationDefaults(mutationKey) {
    const defaults2 = [...__privateGet(this, _mutationDefaults).values()];
    const result = {};
    defaults2.forEach((queryDefault) => {
      if (partialMatchKey(mutationKey, queryDefault.mutationKey)) {
        Object.assign(result, queryDefault.defaultOptions);
      }
    });
    return result;
  }
  defaultQueryOptions(options) {
    if (options._defaulted) {
      return options;
    }
    const defaultedOptions = {
      ...__privateGet(this, _defaultOptions2).queries,
      ...this.getQueryDefaults(options.queryKey),
      ...options,
      _defaulted: true
    };
    if (!defaultedOptions.queryHash) {
      defaultedOptions.queryHash = hashQueryKeyByOptions(
        defaultedOptions.queryKey,
        defaultedOptions
      );
    }
    if (defaultedOptions.refetchOnReconnect === void 0) {
      defaultedOptions.refetchOnReconnect = defaultedOptions.networkMode !== "always";
    }
    if (defaultedOptions.throwOnError === void 0) {
      defaultedOptions.throwOnError = !!defaultedOptions.suspense;
    }
    if (!defaultedOptions.networkMode && defaultedOptions.persister) {
      defaultedOptions.networkMode = "offlineFirst";
    }
    if (defaultedOptions.queryFn === skipToken) {
      defaultedOptions.enabled = false;
    }
    return defaultedOptions;
  }
  defaultMutationOptions(options) {
    if (options == null ? void 0 : options._defaulted) {
      return options;
    }
    return {
      ...__privateGet(this, _defaultOptions2).mutations,
      ...(options == null ? void 0 : options.mutationKey) && this.getMutationDefaults(options.mutationKey),
      ...options,
      _defaulted: true
    };
  }
  clear() {
    __privateGet(this, _queryCache).clear();
    __privateGet(this, _mutationCache2).clear();
  }
}, _queryCache = new WeakMap(), _mutationCache2 = new WeakMap(), _defaultOptions2 = new WeakMap(), _queryDefaults = new WeakMap(), _mutationDefaults = new WeakMap(), _mountCount = new WeakMap(), _unsubscribeFocus = new WeakMap(), _unsubscribeOnline = new WeakMap(), _i);
var QueryClientContext = reactExports.createContext(
  void 0
);
var QueryClientProvider = ({
  client: client2,
  children
}) => {
  reactExports.useEffect(() => {
    client2.mount();
    return () => {
      client2.unmount();
    };
  }, [client2]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(QueryClientContext.Provider, { value: client2, children });
};
const scriptRel = "modulepreload";
const assetsURL = function(dep) {
  return "/kcs-nexus-demo/" + dep;
};
const seen = {};
const __vitePreload = function preload(baseModule, deps, importerUrl) {
  let promise = Promise.resolve();
  if (deps && deps.length > 0) {
    document.getElementsByTagName("link");
    const cspNonceMeta = document.querySelector(
      "meta[property=csp-nonce]"
    );
    const cspNonce = (cspNonceMeta == null ? void 0 : cspNonceMeta.nonce) || (cspNonceMeta == null ? void 0 : cspNonceMeta.getAttribute("nonce"));
    promise = Promise.allSettled(
      deps.map((dep) => {
        dep = assetsURL(dep);
        if (dep in seen) return;
        seen[dep] = true;
        const isCss = dep.endsWith(".css");
        const cssSelector = isCss ? '[rel="stylesheet"]' : "";
        if (document.querySelector(`link[href="${dep}"]${cssSelector}`)) {
          return;
        }
        const link = document.createElement("link");
        link.rel = isCss ? "stylesheet" : scriptRel;
        if (!isCss) {
          link.as = "script";
        }
        link.crossOrigin = "";
        link.href = dep;
        if (cspNonce) {
          link.setAttribute("nonce", cspNonce);
        }
        document.head.appendChild(link);
        if (isCss) {
          return new Promise((res, rej) => {
            link.addEventListener("load", res);
            link.addEventListener(
              "error",
              () => rej(new Error(`Unable to preload CSS for ${dep}`))
            );
          });
        }
      })
    );
  }
  function handlePreloadError(err) {
    const e = new Event("vite:preloadError", {
      cancelable: true
    });
    e.payload = err;
    window.dispatchEvent(e);
    if (!e.defaultPrevented) {
      throw err;
    }
  }
  return promise.then((res) => {
    for (const item of res || []) {
      if (item.status !== "rejected") continue;
      handlePreloadError(item.reason);
    }
    return baseModule().catch(handlePreloadError);
  });
};
function warn() {
  if (console && console.warn) {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    if (isString$2(args[0])) args[0] = `react-i18next:: ${args[0]}`;
    console.warn(...args);
  }
}
const alreadyWarned = {};
function warnOnce() {
  for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    args[_key2] = arguments[_key2];
  }
  if (isString$2(args[0]) && alreadyWarned[args[0]]) return;
  if (isString$2(args[0])) alreadyWarned[args[0]] = /* @__PURE__ */ new Date();
  warn(...args);
}
const loadedClb = (i18n, cb) => () => {
  if (i18n.isInitialized) {
    cb();
  } else {
    const initialized = () => {
      setTimeout(() => {
        i18n.off("initialized", initialized);
      }, 0);
      cb();
    };
    i18n.on("initialized", initialized);
  }
};
const loadNamespaces = (i18n, ns, cb) => {
  i18n.loadNamespaces(ns, loadedClb(i18n, cb));
};
const loadLanguages = (i18n, lng, ns, cb) => {
  if (isString$2(ns)) ns = [ns];
  ns.forEach((n) => {
    if (i18n.options.ns.indexOf(n) < 0) i18n.options.ns.push(n);
  });
  i18n.loadLanguages(lng, loadedClb(i18n, cb));
};
const oldI18nextHasLoadedNamespace = function(ns, i18n) {
  let options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  const lng = i18n.languages[0];
  const fallbackLng = i18n.options ? i18n.options.fallbackLng : false;
  const lastLng = i18n.languages[i18n.languages.length - 1];
  if (lng.toLowerCase() === "cimode") return true;
  const loadNotPending = (l, n) => {
    const loadState = i18n.services.backendConnector.state[`${l}|${n}`];
    return loadState === -1 || loadState === 2;
  };
  if (options.bindI18n && options.bindI18n.indexOf("languageChanging") > -1 && i18n.services.backendConnector.backend && i18n.isLanguageChangingTo && !loadNotPending(i18n.isLanguageChangingTo, ns)) return false;
  if (i18n.hasResourceBundle(lng, ns)) return true;
  if (!i18n.services.backendConnector.backend || i18n.options.resources && !i18n.options.partialBundledLanguages) return true;
  if (loadNotPending(lng, ns) && (!fallbackLng || loadNotPending(lastLng, ns))) return true;
  return false;
};
const hasLoadedNamespace = function(ns, i18n) {
  let options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (!i18n.languages || !i18n.languages.length) {
    warnOnce("i18n.languages were undefined or empty", i18n.languages);
    return true;
  }
  const isNewerI18next = i18n.options.ignoreJSONStructure !== void 0;
  if (!isNewerI18next) {
    return oldI18nextHasLoadedNamespace(ns, i18n, options);
  }
  return i18n.hasLoadedNamespace(ns, {
    lng: options.lng,
    precheck: (i18nInstance2, loadNotPending) => {
      if (options.bindI18n && options.bindI18n.indexOf("languageChanging") > -1 && i18nInstance2.services.backendConnector.backend && i18nInstance2.isLanguageChangingTo && !loadNotPending(i18nInstance2.isLanguageChangingTo, ns)) return false;
    }
  });
};
const isString$2 = (obj) => typeof obj === "string";
const isObject$1 = (obj) => typeof obj === "object" && obj !== null;
const matchHtmlEntity = /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g;
const htmlEntities = {
  "&amp;": "&",
  "&#38;": "&",
  "&lt;": "<",
  "&#60;": "<",
  "&gt;": ">",
  "&#62;": ">",
  "&apos;": "'",
  "&#39;": "'",
  "&quot;": '"',
  "&#34;": '"',
  "&nbsp;": " ",
  "&#160;": " ",
  "&copy;": "©",
  "&#169;": "©",
  "&reg;": "®",
  "&#174;": "®",
  "&hellip;": "…",
  "&#8230;": "…",
  "&#x2F;": "/",
  "&#47;": "/"
};
const unescapeHtmlEntity = (m2) => htmlEntities[m2];
const unescape$1 = (text) => text.replace(matchHtmlEntity, unescapeHtmlEntity);
let defaultOptions = {
  bindI18n: "languageChanged",
  bindI18nStore: "",
  transEmptyNodeValue: "",
  transSupportBasicHtmlNodes: true,
  transWrapTextNodes: "",
  transKeepBasicHtmlNodesFor: ["br", "strong", "i", "p"],
  useSuspense: true,
  unescape: unescape$1
};
const setDefaults = function() {
  let options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  defaultOptions = {
    ...defaultOptions,
    ...options
  };
};
const getDefaults = () => defaultOptions;
let i18nInstance;
const setI18n = (instance2) => {
  i18nInstance = instance2;
};
const getI18n = () => i18nInstance;
const initReactI18next = {
  type: "3rdParty",
  init(instance2) {
    setDefaults(instance2.options.react);
    setI18n(instance2);
  }
};
const I18nContext = reactExports.createContext();
class ReportNamespaces {
  constructor() {
    __publicField(this, "getUsedNamespaces", () => Object.keys(this.usedNamespaces));
    this.usedNamespaces = {};
  }
  addUsedNamespaces(namespaces) {
    namespaces.forEach((ns) => {
      if (!this.usedNamespaces[ns]) this.usedNamespaces[ns] = true;
    });
  }
}
const usePrevious = (value, ignore) => {
  const ref = reactExports.useRef();
  reactExports.useEffect(() => {
    ref.current = value;
  }, [value, ignore]);
  return ref.current;
};
const alwaysNewT = (i18n, language, namespace, keyPrefix) => i18n.getFixedT(language, namespace, keyPrefix);
const useMemoizedT = (i18n, language, namespace, keyPrefix) => reactExports.useCallback(alwaysNewT(i18n, language, namespace, keyPrefix), [i18n, language, namespace, keyPrefix]);
const useTranslation = function(ns) {
  let props = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    i18n: i18nFromProps
  } = props;
  const {
    i18n: i18nFromContext,
    defaultNS: defaultNSFromContext
  } = reactExports.useContext(I18nContext) || {};
  const i18n = i18nFromProps || i18nFromContext || getI18n();
  if (i18n && !i18n.reportNamespaces) i18n.reportNamespaces = new ReportNamespaces();
  if (!i18n) {
    warnOnce("You will need to pass in an i18next instance by using initReactI18next");
    const notReadyT = (k, optsOrDefaultValue) => {
      if (isString$2(optsOrDefaultValue)) return optsOrDefaultValue;
      if (isObject$1(optsOrDefaultValue) && isString$2(optsOrDefaultValue.defaultValue)) return optsOrDefaultValue.defaultValue;
      return Array.isArray(k) ? k[k.length - 1] : k;
    };
    const retNotReady = [notReadyT, {}, false];
    retNotReady.t = notReadyT;
    retNotReady.i18n = {};
    retNotReady.ready = false;
    return retNotReady;
  }
  if (i18n.options.react && i18n.options.react.wait !== void 0) warnOnce("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");
  const i18nOptions = {
    ...getDefaults(),
    ...i18n.options.react,
    ...props
  };
  const {
    useSuspense,
    keyPrefix
  } = i18nOptions;
  let namespaces = defaultNSFromContext || i18n.options && i18n.options.defaultNS;
  namespaces = isString$2(namespaces) ? [namespaces] : namespaces || ["translation"];
  if (i18n.reportNamespaces.addUsedNamespaces) i18n.reportNamespaces.addUsedNamespaces(namespaces);
  const ready = (i18n.isInitialized || i18n.initializedStoreOnce) && namespaces.every((n) => hasLoadedNamespace(n, i18n, i18nOptions));
  const memoGetT = useMemoizedT(i18n, props.lng || null, i18nOptions.nsMode === "fallback" ? namespaces : namespaces[0], keyPrefix);
  const getT = () => memoGetT;
  const getNewT = () => alwaysNewT(i18n, props.lng || null, i18nOptions.nsMode === "fallback" ? namespaces : namespaces[0], keyPrefix);
  const [t, setT] = reactExports.useState(getT);
  let joinedNS = namespaces.join();
  if (props.lng) joinedNS = `${props.lng}${joinedNS}`;
  const previousJoinedNS = usePrevious(joinedNS);
  const isMounted = reactExports.useRef(true);
  reactExports.useEffect(() => {
    const {
      bindI18n,
      bindI18nStore
    } = i18nOptions;
    isMounted.current = true;
    if (!ready && !useSuspense) {
      if (props.lng) {
        loadLanguages(i18n, props.lng, namespaces, () => {
          if (isMounted.current) setT(getNewT);
        });
      } else {
        loadNamespaces(i18n, namespaces, () => {
          if (isMounted.current) setT(getNewT);
        });
      }
    }
    if (ready && previousJoinedNS && previousJoinedNS !== joinedNS && isMounted.current) {
      setT(getNewT);
    }
    const boundReset = () => {
      if (isMounted.current) setT(getNewT);
    };
    if (bindI18n && i18n) i18n.on(bindI18n, boundReset);
    if (bindI18nStore && i18n) i18n.store.on(bindI18nStore, boundReset);
    return () => {
      isMounted.current = false;
      if (bindI18n && i18n) bindI18n.split(" ").forEach((e) => i18n.off(e, boundReset));
      if (bindI18nStore && i18n) bindI18nStore.split(" ").forEach((e) => i18n.store.off(e, boundReset));
    };
  }, [i18n, joinedNS]);
  reactExports.useEffect(() => {
    if (isMounted.current && ready) {
      setT(getT);
    }
  }, [i18n, keyPrefix, ready]);
  const ret = [t, i18n, ready];
  ret.t = t;
  ret.i18n = i18n;
  ret.ready = ready;
  if (ready) return ret;
  if (!ready && !useSuspense) return ret;
  throw new Promise((resolve) => {
    if (props.lng) {
      loadLanguages(i18n, props.lng, namespaces, () => resolve());
    } else {
      loadNamespaces(i18n, namespaces, () => resolve());
    }
  });
};
const __vite_import_meta_env__$2 = {};
const createStoreImpl = (createState) => {
  let state;
  const listeners = /* @__PURE__ */ new Set();
  const setState = (partial, replace) => {
    const nextState = typeof partial === "function" ? partial(state) : partial;
    if (!Object.is(nextState, state)) {
      const previousState = state;
      state = (replace != null ? replace : typeof nextState !== "object" || nextState === null) ? nextState : Object.assign({}, state, nextState);
      listeners.forEach((listener) => listener(state, previousState));
    }
  };
  const getState = () => state;
  const getInitialState = () => initialState;
  const subscribe = (listener) => {
    listeners.add(listener);
    return () => listeners.delete(listener);
  };
  const destroy = () => {
    if ((__vite_import_meta_env__$2 ? "production" : void 0) !== "production") {
      console.warn(
        "[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."
      );
    }
    listeners.clear();
  };
  const api2 = { setState, getState, getInitialState, subscribe, destroy };
  const initialState = state = createState(setState, getState, api2);
  return api2;
};
const createStore = (createState) => createState ? createStoreImpl(createState) : createStoreImpl;
var withSelector = { exports: {} };
var withSelector_production = {};
var shim$2 = { exports: {} };
var useSyncExternalStoreShim_production = {};
/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var React$1 = reactExports;
function is$1(x, y) {
  return x === y && (0 !== x || 1 / x === 1 / y) || x !== x && y !== y;
}
var objectIs$1 = "function" === typeof Object.is ? Object.is : is$1, useState = React$1.useState, useEffect$1 = React$1.useEffect, useLayoutEffect = React$1.useLayoutEffect, useDebugValue$2 = React$1.useDebugValue;
function useSyncExternalStore$2(subscribe, getSnapshot) {
  var value = getSnapshot(), _useState = useState({ inst: { value, getSnapshot } }), inst = _useState[0].inst, forceUpdate = _useState[1];
  useLayoutEffect(
    function() {
      inst.value = value;
      inst.getSnapshot = getSnapshot;
      checkIfSnapshotChanged(inst) && forceUpdate({ inst });
    },
    [subscribe, value, getSnapshot]
  );
  useEffect$1(
    function() {
      checkIfSnapshotChanged(inst) && forceUpdate({ inst });
      return subscribe(function() {
        checkIfSnapshotChanged(inst) && forceUpdate({ inst });
      });
    },
    [subscribe]
  );
  useDebugValue$2(value);
  return value;
}
function checkIfSnapshotChanged(inst) {
  var latestGetSnapshot = inst.getSnapshot;
  inst = inst.value;
  try {
    var nextValue = latestGetSnapshot();
    return !objectIs$1(inst, nextValue);
  } catch (error) {
    return true;
  }
}
function useSyncExternalStore$1(subscribe, getSnapshot) {
  return getSnapshot();
}
var shim$1 = "undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement ? useSyncExternalStore$1 : useSyncExternalStore$2;
useSyncExternalStoreShim_production.useSyncExternalStore = void 0 !== React$1.useSyncExternalStore ? React$1.useSyncExternalStore : shim$1;
{
  shim$2.exports = useSyncExternalStoreShim_production;
}
var shimExports = shim$2.exports;
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var React = reactExports, shim = shimExports;
function is(x, y) {
  return x === y && (0 !== x || 1 / x === 1 / y) || x !== x && y !== y;
}
var objectIs = "function" === typeof Object.is ? Object.is : is, useSyncExternalStore = shim.useSyncExternalStore, useRef = React.useRef, useEffect = React.useEffect, useMemo = React.useMemo, useDebugValue$1 = React.useDebugValue;
withSelector_production.useSyncExternalStoreWithSelector = function(subscribe, getSnapshot, getServerSnapshot, selector, isEqual) {
  var instRef = useRef(null);
  if (null === instRef.current) {
    var inst = { hasValue: false, value: null };
    instRef.current = inst;
  } else inst = instRef.current;
  instRef = useMemo(
    function() {
      function memoizedSelector(nextSnapshot) {
        if (!hasMemo) {
          hasMemo = true;
          memoizedSnapshot = nextSnapshot;
          nextSnapshot = selector(nextSnapshot);
          if (void 0 !== isEqual && inst.hasValue) {
            var currentSelection = inst.value;
            if (isEqual(currentSelection, nextSnapshot))
              return memoizedSelection = currentSelection;
          }
          return memoizedSelection = nextSnapshot;
        }
        currentSelection = memoizedSelection;
        if (objectIs(memoizedSnapshot, nextSnapshot)) return currentSelection;
        var nextSelection = selector(nextSnapshot);
        if (void 0 !== isEqual && isEqual(currentSelection, nextSelection))
          return memoizedSnapshot = nextSnapshot, currentSelection;
        memoizedSnapshot = nextSnapshot;
        return memoizedSelection = nextSelection;
      }
      var hasMemo = false, memoizedSnapshot, memoizedSelection, maybeGetServerSnapshot = void 0 === getServerSnapshot ? null : getServerSnapshot;
      return [
        function() {
          return memoizedSelector(getSnapshot());
        },
        null === maybeGetServerSnapshot ? void 0 : function() {
          return memoizedSelector(maybeGetServerSnapshot());
        }
      ];
    },
    [getSnapshot, getServerSnapshot, selector, isEqual]
  );
  var value = useSyncExternalStore(subscribe, instRef[0], instRef[1]);
  useEffect(
    function() {
      inst.hasValue = true;
      inst.value = value;
    },
    [value]
  );
  useDebugValue$1(value);
  return value;
};
{
  withSelector.exports = withSelector_production;
}
var withSelectorExports = withSelector.exports;
const useSyncExternalStoreExports = /* @__PURE__ */ getDefaultExportFromCjs(withSelectorExports);
const __vite_import_meta_env__$1 = {};
const { useDebugValue } = React$2;
const { useSyncExternalStoreWithSelector } = useSyncExternalStoreExports;
let didWarnAboutEqualityFn = false;
const identity = (arg) => arg;
function useStore(api2, selector = identity, equalityFn) {
  if ((__vite_import_meta_env__$1 ? "production" : void 0) !== "production" && equalityFn && !didWarnAboutEqualityFn) {
    console.warn(
      "[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"
    );
    didWarnAboutEqualityFn = true;
  }
  const slice = useSyncExternalStoreWithSelector(
    api2.subscribe,
    api2.getState,
    api2.getServerState || api2.getInitialState,
    selector,
    equalityFn
  );
  useDebugValue(slice);
  return slice;
}
const createImpl = (createState) => {
  if ((__vite_import_meta_env__$1 ? "production" : void 0) !== "production" && typeof createState !== "function") {
    console.warn(
      "[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`."
    );
  }
  const api2 = typeof createState === "function" ? createStore(createState) : createState;
  const useBoundStore = (selector, equalityFn) => useStore(api2, selector, equalityFn);
  Object.assign(useBoundStore, api2);
  return useBoundStore;
};
const create = (createState) => createImpl;
const __vite_import_meta_env__ = {};
function createJSONStorage(getStorage, options) {
  let storage;
  try {
    storage = getStorage();
  } catch (_e2) {
    return;
  }
  const persistStorage = {
    getItem: (name) => {
      var _a2;
      const parse = (str2) => {
        if (str2 === null) {
          return null;
        }
        return JSON.parse(str2, void 0);
      };
      const str = (_a2 = storage.getItem(name)) != null ? _a2 : null;
      if (str instanceof Promise) {
        return str.then(parse);
      }
      return parse(str);
    },
    setItem: (name, newValue) => storage.setItem(
      name,
      JSON.stringify(newValue, void 0)
    ),
    removeItem: (name) => storage.removeItem(name)
  };
  return persistStorage;
}
const toThenable = (fn) => (input) => {
  try {
    const result = fn(input);
    if (result instanceof Promise) {
      return result;
    }
    return {
      then(onFulfilled) {
        return toThenable(onFulfilled)(result);
      },
      catch(_onRejected) {
        return this;
      }
    };
  } catch (e) {
    return {
      then(_onFulfilled) {
        return this;
      },
      catch(onRejected) {
        return toThenable(onRejected)(e);
      }
    };
  }
};
const oldImpl = (config, baseOptions) => (set, get2, api2) => {
  let options = {
    getStorage: () => localStorage,
    serialize: JSON.stringify,
    deserialize: JSON.parse,
    partialize: (state) => state,
    version: 0,
    merge: (persistedState, currentState) => ({
      ...currentState,
      ...persistedState
    }),
    ...baseOptions
  };
  let hasHydrated = false;
  const hydrationListeners = /* @__PURE__ */ new Set();
  const finishHydrationListeners = /* @__PURE__ */ new Set();
  let storage;
  try {
    storage = options.getStorage();
  } catch (_e2) {
  }
  if (!storage) {
    return config(
      (...args) => {
        console.warn(
          `[zustand persist middleware] Unable to update item '${options.name}', the given storage is currently unavailable.`
        );
        set(...args);
      },
      get2,
      api2
    );
  }
  const thenableSerialize = toThenable(options.serialize);
  const setItem = () => {
    const state = options.partialize({ ...get2() });
    let errorInSync;
    const thenable = thenableSerialize({ state, version: options.version }).then(
      (serializedValue) => storage.setItem(options.name, serializedValue)
    ).catch((e) => {
      errorInSync = e;
    });
    if (errorInSync) {
      throw errorInSync;
    }
    return thenable;
  };
  const savedSetState = api2.setState;
  api2.setState = (state, replace) => {
    savedSetState(state, replace);
    void setItem();
  };
  const configResult = config(
    (...args) => {
      set(...args);
      void setItem();
    },
    get2,
    api2
  );
  let stateFromStorage;
  const hydrate = () => {
    var _a2;
    if (!storage) return;
    hasHydrated = false;
    hydrationListeners.forEach((cb) => cb(get2()));
    const postRehydrationCallback = ((_a2 = options.onRehydrateStorage) == null ? void 0 : _a2.call(options, get2())) || void 0;
    return toThenable(storage.getItem.bind(storage))(options.name).then((storageValue) => {
      if (storageValue) {
        return options.deserialize(storageValue);
      }
    }).then((deserializedStorageValue) => {
      if (deserializedStorageValue) {
        if (typeof deserializedStorageValue.version === "number" && deserializedStorageValue.version !== options.version) {
          if (options.migrate) {
            return options.migrate(
              deserializedStorageValue.state,
              deserializedStorageValue.version
            );
          }
          console.error(
            `State loaded from storage couldn't be migrated since no migrate function was provided`
          );
        } else {
          return deserializedStorageValue.state;
        }
      }
    }).then((migratedState) => {
      var _a22;
      stateFromStorage = options.merge(
        migratedState,
        (_a22 = get2()) != null ? _a22 : configResult
      );
      set(stateFromStorage, true);
      return setItem();
    }).then(() => {
      postRehydrationCallback == null ? void 0 : postRehydrationCallback(stateFromStorage, void 0);
      hasHydrated = true;
      finishHydrationListeners.forEach((cb) => cb(stateFromStorage));
    }).catch((e) => {
      postRehydrationCallback == null ? void 0 : postRehydrationCallback(void 0, e);
    });
  };
  api2.persist = {
    setOptions: (newOptions) => {
      options = {
        ...options,
        ...newOptions
      };
      if (newOptions.getStorage) {
        storage = newOptions.getStorage();
      }
    },
    clearStorage: () => {
      storage == null ? void 0 : storage.removeItem(options.name);
    },
    getOptions: () => options,
    rehydrate: () => hydrate(),
    hasHydrated: () => hasHydrated,
    onHydrate: (cb) => {
      hydrationListeners.add(cb);
      return () => {
        hydrationListeners.delete(cb);
      };
    },
    onFinishHydration: (cb) => {
      finishHydrationListeners.add(cb);
      return () => {
        finishHydrationListeners.delete(cb);
      };
    }
  };
  hydrate();
  return stateFromStorage || configResult;
};
const newImpl = (config, baseOptions) => (set, get2, api2) => {
  let options = {
    storage: createJSONStorage(() => localStorage),
    partialize: (state) => state,
    version: 0,
    merge: (persistedState, currentState) => ({
      ...currentState,
      ...persistedState
    }),
    ...baseOptions
  };
  let hasHydrated = false;
  const hydrationListeners = /* @__PURE__ */ new Set();
  const finishHydrationListeners = /* @__PURE__ */ new Set();
  let storage = options.storage;
  if (!storage) {
    return config(
      (...args) => {
        console.warn(
          `[zustand persist middleware] Unable to update item '${options.name}', the given storage is currently unavailable.`
        );
        set(...args);
      },
      get2,
      api2
    );
  }
  const setItem = () => {
    const state = options.partialize({ ...get2() });
    return storage.setItem(options.name, {
      state,
      version: options.version
    });
  };
  const savedSetState = api2.setState;
  api2.setState = (state, replace) => {
    savedSetState(state, replace);
    void setItem();
  };
  const configResult = config(
    (...args) => {
      set(...args);
      void setItem();
    },
    get2,
    api2
  );
  api2.getInitialState = () => configResult;
  let stateFromStorage;
  const hydrate = () => {
    var _a2, _b2;
    if (!storage) return;
    hasHydrated = false;
    hydrationListeners.forEach((cb) => {
      var _a22;
      return cb((_a22 = get2()) != null ? _a22 : configResult);
    });
    const postRehydrationCallback = ((_b2 = options.onRehydrateStorage) == null ? void 0 : _b2.call(options, (_a2 = get2()) != null ? _a2 : configResult)) || void 0;
    return toThenable(storage.getItem.bind(storage))(options.name).then((deserializedStorageValue) => {
      if (deserializedStorageValue) {
        if (typeof deserializedStorageValue.version === "number" && deserializedStorageValue.version !== options.version) {
          if (options.migrate) {
            return [
              true,
              options.migrate(
                deserializedStorageValue.state,
                deserializedStorageValue.version
              )
            ];
          }
          console.error(
            `State loaded from storage couldn't be migrated since no migrate function was provided`
          );
        } else {
          return [false, deserializedStorageValue.state];
        }
      }
      return [false, void 0];
    }).then((migrationResult) => {
      var _a22;
      const [migrated, migratedState] = migrationResult;
      stateFromStorage = options.merge(
        migratedState,
        (_a22 = get2()) != null ? _a22 : configResult
      );
      set(stateFromStorage, true);
      if (migrated) {
        return setItem();
      }
    }).then(() => {
      postRehydrationCallback == null ? void 0 : postRehydrationCallback(stateFromStorage, void 0);
      stateFromStorage = get2();
      hasHydrated = true;
      finishHydrationListeners.forEach((cb) => cb(stateFromStorage));
    }).catch((e) => {
      postRehydrationCallback == null ? void 0 : postRehydrationCallback(void 0, e);
    });
  };
  api2.persist = {
    setOptions: (newOptions) => {
      options = {
        ...options,
        ...newOptions
      };
      if (newOptions.storage) {
        storage = newOptions.storage;
      }
    },
    clearStorage: () => {
      storage == null ? void 0 : storage.removeItem(options.name);
    },
    getOptions: () => options,
    rehydrate: () => hydrate(),
    hasHydrated: () => hasHydrated,
    onHydrate: (cb) => {
      hydrationListeners.add(cb);
      return () => {
        hydrationListeners.delete(cb);
      };
    },
    onFinishHydration: (cb) => {
      finishHydrationListeners.add(cb);
      return () => {
        finishHydrationListeners.delete(cb);
      };
    }
  };
  if (!options.skipHydration) {
    hydrate();
  }
  return stateFromStorage || configResult;
};
const persistImpl = (config, baseOptions) => {
  if ("getStorage" in baseOptions || "serialize" in baseOptions || "deserialize" in baseOptions) {
    if ((__vite_import_meta_env__ ? "production" : void 0) !== "production") {
      console.warn(
        "[DEPRECATED] `getStorage`, `serialize` and `deserialize` options are deprecated. Use `storage` option instead."
      );
    }
    return oldImpl(config, baseOptions);
  }
  return newImpl(config, baseOptions);
};
const persist = persistImpl;
const useUIStore = create()(
  persist(
    (set, get2) => ({
      theme: "light",
      language: "en",
      sidebarOpen: false,
      sidebarCollapsed: false,
      notifications: [],
      unreadCount: 0,
      chatOpen: false,
      searchOpen: false,
      setTheme: (theme) => {
        set({ theme });
        applyTheme(theme);
      },
      toggleTheme: () => {
        const current = get2().theme;
        const next = current === "light" ? "dark" : "light";
        set({ theme: next });
        applyTheme(next);
      },
      setLanguage: (language) => {
        set({ language });
        applyLanguage(language);
      },
      toggleSidebar: () => set((state) => ({ sidebarOpen: !state.sidebarOpen })),
      setSidebarOpen: (open) => set({ sidebarOpen: open }),
      toggleSidebarCollapse: () => set((state) => ({ sidebarCollapsed: !state.sidebarCollapsed })),
      addNotification: (notification) => set((state) => ({
        notifications: [notification, ...state.notifications].slice(0, 50),
        unreadCount: state.unreadCount + 1
      })),
      markNotificationRead: (id) => set((state) => ({
        notifications: state.notifications.map(
          (n) => n.id === id ? { ...n, isRead: true } : n
        ),
        unreadCount: Math.max(0, state.unreadCount - 1)
      })),
      markAllNotificationsRead: () => set((state) => ({
        notifications: state.notifications.map((n) => ({ ...n, isRead: true })),
        unreadCount: 0
      })),
      clearNotifications: () => set({ notifications: [], unreadCount: 0 }),
      toggleChat: () => set((state) => ({ chatOpen: !state.chatOpen })),
      toggleSearch: () => set((state) => ({ searchOpen: !state.searchOpen }))
    }),
    {
      name: "kcs-ui",
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        theme: state.theme,
        language: state.language,
        sidebarCollapsed: state.sidebarCollapsed
      })
    }
  )
);
function applyTheme(theme) {
  const root = document.documentElement;
  if (theme === "dark") {
    root.classList.add("dark");
  } else if (theme === "light") {
    root.classList.remove("dark");
  } else {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (prefersDark) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }
}
function applyLanguage(language) {
  if (typeof document !== "undefined") {
    document.documentElement.lang = language;
  }
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent("kcs-language-change", { detail: { language } }));
  }
}
const useAuthStore = create()(
  persist(
    (set, get2) => ({
      user: null,
      token: null,
      refreshToken: null,
      isAuthenticated: false,
      isLoading: false,
      login: (user, token, refreshToken) => {
        set({ user, token, refreshToken, isAuthenticated: true, isLoading: false });
      },
      logout: () => {
        set({ user: null, token: null, refreshToken: null, isAuthenticated: false });
        if (typeof window !== "undefined") {
          sessionStorage.clear();
        }
      },
      updateUser: (updates) => {
        const current = get2().user;
        if (current) {
          set({ user: { ...current, ...updates } });
        }
      },
      setLoading: (loading) => set({ isLoading: loading }),
      hasRole: (role) => {
        const user = get2().user;
        if (!user) return false;
        if (Array.isArray(role)) {
          return role.includes(user.role);
        }
        return user.role === role;
      }
    }),
    {
      name: "kcs-auth",
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        user: state.user,
        token: state.token,
        refreshToken: state.refreshToken,
        isAuthenticated: state.isAuthenticated
      })
    }
  )
);
const trimTrailingSlash = (value) => value.replace(/\/+$/, "");
const trimSlashes = (value) => value.replace(/^\/+/, "");
const getBasePath = () => {
  const configuredBase = "/kcs-nexus-demo/";
  {
    return trimTrailingSlash(configuredBase);
  }
};
const getAssetUrl = (path) => {
  const cleanPath = trimSlashes(path);
  const basePath = getBasePath();
  return basePath ? `${basePath}/${cleanPath}` : `/${cleanPath}`;
};
const getRouteUrl = (path) => {
  const cleanPath = trimSlashes(path);
  const basePath = getBasePath();
  return basePath ? `${basePath}/${cleanPath}` : `/${cleanPath}`;
};
const Header = () => {
  var _a2, _b2;
  const { t, i18n } = useTranslation();
  const { theme, toggleTheme, language, setLanguage, unreadCount } = useUIStore();
  const { isAuthenticated, user } = useAuthStore();
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = reactExports.useState(false);
  const [scrolled, setScrolled] = reactExports.useState(false);
  const headerRef = reactExports.useRef(null);
  const mobileMenuRef = reactExports.useRef(null);
  const mobileMenuButtonRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  reactExports.useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);
  reactExports.useEffect(() => {
    if (!mobileOpen) return;
    const closeOnOutsideClick = (event) => {
      var _a3, _b3;
      const target = event.target;
      if (((_a3 = mobileMenuButtonRef.current) == null ? void 0 : _a3.contains(target)) || ((_b3 = mobileMenuRef.current) == null ? void 0 : _b3.contains(target))) {
        return;
      }
      setMobileOpen(false);
    };
    document.addEventListener("pointerdown", closeOnOutsideClick);
    return () => document.removeEventListener("pointerdown", closeOnOutsideClick);
  }, [mobileOpen]);
  const currentLanguage = (i18n.resolvedLanguage || i18n.language || language).startsWith("fr") ? "fr" : "en";
  const nextLanguage = currentLanguage === "en" ? "fr" : "en";
  const toggleLanguage = () => {
    setLanguage(nextLanguage);
    void i18n.changeLanguage(nextLanguage);
  };
  const isHomePage = location.pathname === "/";
  const logoSrc = getAssetUrl("images/kcs.jpg");
  const dashboardPath = (user == null ? void 0 : user.role) === "admin" ? "/admin" : `/portal/${(user == null ? void 0 : user.role) ?? ""}`;
  const navItems = [
    { to: "/", label: t("nav.home"), icon: Home },
    { to: "/about", label: t("nav.about"), icon: Users },
    { to: "/academics", label: t("nav.academics"), icon: GraduationCap },
    { to: "/news", label: t("nav.news"), icon: Newspaper },
    { to: "/admissions", label: t("nav.admissions"), icon: BookOpen },
    { to: "/gallery", label: t("nav.gallery"), icon: Image },
    { to: "/contact", label: t("nav.contact"), icon: Phone }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "header",
    {
      ref: headerRef,
      className: "fixed top-0 left-0 right-0 z-50 px-3 pt-3 transition-all duration-500",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container-custom", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: `public-topbar flex h-[68px] items-center justify-between gap-2 rounded-[34px] px-2.5 pr-3 transition-all duration-500 sm:h-[76px] sm:gap-3 sm:rounded-[38px] sm:px-3.5 md:px-4 ${scrolled || !isHomePage ? "github-glass dark:github-glass-dark" : "public-topbar-hero border border-white/20 bg-kcs-blue-950/26 shadow-kcs backdrop-blur-2xl"}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "group flex min-w-0 shrink-0 items-center gap-2.5 rounded-full pr-1 transition-colors hover:bg-white/10 sm:gap-3 sm:pr-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-full border-[3px] border-white bg-white p-1 shadow-kcs ring-4 ring-white/35 transition-all duration-300 group-hover:scale-[1.03] group-hover:shadow-kcs-lg sm:h-16 sm:w-16 dark:ring-kcs-blue-900/45", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "img",
                  {
                    src: logoSrc,
                    alt: "Kinshasa Christian School",
                    className: "h-full w-full object-contain"
                  }
                ) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hidden sm:block", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `font-bold text-sm leading-tight font-display transition-colors duration-300 ${scrolled || !isHomePage ? "text-kcs-blue-900 dark:text-white" : "text-white"}`, children: "Kinshasa Christian" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `text-xs font-medium transition-colors duration-300 ${scrolled || !isHomePage ? "text-kcs-blue-600 dark:text-kcs-gold-300" : "text-kcs-gold-100"}`, children: "Letting Our Light Shine" })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "hidden min-w-0 flex-1 items-center justify-center gap-1 lg:flex", children: navItems.map(({ to, label }) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                NavLink,
                {
                  to,
                  className: ({ isActive }) => `public-nav-link max-w-[118px] truncate rounded-full px-3 py-2 text-center text-[13px] font-semibold leading-none transition-all duration-200 xl:max-w-none xl:px-3.5 ${isActive ? "bg-kcs-blue-700 text-white shadow-sm dark:bg-kcs-blue-100 dark:text-kcs-blue-950" : scrolled || !isHomePage ? "text-kcs-blue-950 dark:text-gray-200 hover:bg-kcs-blue-50 hover:text-kcs-blue-700 dark:hover:bg-white/10" : "text-white/90 hover:bg-white/10 hover:text-white"}`,
                  title: label,
                  children: label
                },
                to
              )) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex shrink-0 items-center gap-1 sm:gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "button",
                  {
                    type: "button",
                    onClick: toggleLanguage,
                    className: `public-header-action flex h-10 items-center gap-1.5 rounded-full px-2.5 text-sm font-semibold transition-all duration-200 sm:px-3 ${scrolled || !isHomePage ? "text-kcs-blue-800 dark:text-gray-200 hover:bg-kcs-blue-50 dark:hover:bg-white/10" : "text-white/80 hover:text-white hover:bg-white/10"}`,
                    "aria-label": t("common.language"),
                    title: nextLanguage === "fr" ? "Français" : "English",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Globe, { size: 16 }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: nextLanguage.toUpperCase() })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: toggleTheme,
                    className: `public-header-action flex h-10 w-10 items-center justify-center rounded-full transition-all duration-200 ${scrolled || !isHomePage ? "text-kcs-blue-800 dark:text-gray-200 hover:bg-kcs-blue-50 dark:hover:bg-white/10" : "text-white/80 hover:text-white hover:bg-white/10"}`,
                    "aria-label": theme === "dark" ? t("common.lightMode") : t("common.darkMode"),
                    children: theme === "dark" ? /* @__PURE__ */ jsxRuntimeExports.jsx(Sun, { size: 18 }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Moon, { size: 18 })
                  }
                ),
                isAuthenticated && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Link,
                  {
                    to: "/portal/notifications",
                    className: `public-header-action relative rounded-full p-2 transition-all duration-200 ${scrolled || !isHomePage ? "text-kcs-blue-800 dark:text-gray-200 hover:bg-kcs-blue-50 dark:hover:bg-white/10" : "text-white/80 hover:text-white hover:bg-white/10"}`,
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Bell, { size: 18 }),
                      unreadCount > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute top-1 right-1 w-4 h-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center", children: unreadCount > 9 ? "9+" : unreadCount })
                    ]
                  }
                ),
                isAuthenticated ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Link,
                  {
                    to: dashboardPath,
                    className: "hidden sm:flex items-center gap-2 btn-primary text-sm py-2",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-6 h-6 rounded-full bg-kcs-gold-500 flex items-center justify-center text-kcs-blue-950 text-xs font-bold", children: [
                        (_a2 = user == null ? void 0 : user.firstName) == null ? void 0 : _a2[0],
                        (_b2 = user == null ? void 0 : user.lastName) == null ? void 0 : _b2[0]
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t("nav.dashboard") })
                    ]
                  }
                ) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hidden sm:flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/login", className: `flex items-center gap-1.5 rounded-full px-3 py-2 text-sm font-semibold transition-all duration-200 ${scrolled || !isHomePage ? "text-kcs-blue-700 dark:text-kcs-blue-200 hover:bg-kcs-blue-50 dark:hover:bg-white/10" : "text-white hover:bg-white/10"}`, children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(LogIn, { size: 16 }),
                    t("nav.login")
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/admissions", className: "public-apply-button rounded-full bg-kcs-blue-700 px-4 py-2 text-sm font-bold text-white shadow-kcs transition-all duration-300 hover:-translate-y-0.5 hover:bg-kcs-blue-800 hover:shadow-kcs-lg dark:bg-kcs-blue-100 dark:text-kcs-blue-950 dark:hover:bg-white", children: t("nav.applyNow") })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    ref: mobileMenuButtonRef,
                    type: "button",
                    onClick: () => setMobileOpen(!mobileOpen),
                    className: `public-menu-button flex h-11 w-11 items-center justify-center rounded-full border transition-all duration-200 lg:hidden ${scrolled || !isHomePage ? "border-kcs-blue-100 bg-white/65 text-kcs-blue-800 shadow-sm hover:bg-kcs-blue-50 dark:border-kcs-blue-800 dark:bg-kcs-blue-900/40 dark:text-gray-200 dark:hover:bg-white/10" : "border-white/20 bg-white/10 text-white shadow-sm hover:bg-white/15"}`,
                    "aria-label": mobileOpen ? t("common.close") : t("nav.portal"),
                    children: mobileOpen ? /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 22 }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { size: 22 })
                  }
                )
              ] })
            ]
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: mobileOpen && /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { opacity: 0, height: 0 },
            animate: { opacity: 1, height: "auto" },
            exit: { opacity: 0, height: 0 },
            transition: { duration: 0.3, ease: "easeInOut" },
            className: "lg:hidden overflow-hidden",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container-custom py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { ref: mobileMenuRef, className: "public-mobile-menu github-glass dark:github-glass-dark max-h-[calc(100dvh-96px)] space-y-1 overflow-y-auto rounded-[30px] p-2.5 shadow-2xl shadow-kcs-blue-950/15 sm:rounded-[34px] sm:p-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-2 grid grid-cols-2 gap-2 border-b border-gray-100 pb-3 dark:border-kcs-blue-800", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "button",
                  {
                    type: "button",
                    onClick: toggleLanguage,
                    className: "flex min-h-11 items-center justify-center gap-2 rounded-2xl border border-kcs-blue-100 bg-white/70 px-3 py-2 text-sm font-bold text-kcs-blue-800 shadow-sm transition hover:bg-kcs-blue-50 dark:border-white/10 dark:bg-kcs-blue-900/45 dark:text-kcs-blue-100 dark:hover:bg-white/10",
                    "aria-label": t("common.language"),
                    title: nextLanguage === "fr" ? "Français" : "English",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Globe, { size: 17 }),
                      nextLanguage.toUpperCase()
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "button",
                  {
                    type: "button",
                    onClick: toggleTheme,
                    className: "flex min-h-11 items-center justify-center gap-2 rounded-2xl border border-kcs-blue-100 bg-white/70 px-3 py-2 text-sm font-bold text-kcs-blue-800 shadow-sm transition hover:bg-kcs-blue-50 dark:border-white/10 dark:bg-kcs-blue-900/45 dark:text-kcs-blue-100 dark:hover:bg-white/10",
                    "aria-label": theme === "dark" ? t("common.lightMode") : t("common.darkMode"),
                    children: [
                      theme === "dark" ? /* @__PURE__ */ jsxRuntimeExports.jsx(Sun, { size: 17 }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Moon, { size: 17 }),
                      theme === "dark" ? t("common.lightMode") : t("common.darkMode")
                    ]
                  }
                )
              ] }),
              navItems.map(({ to, label, icon: Icon }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                NavLink,
                {
                  to,
                  onClick: () => setMobileOpen(false),
                  className: ({ isActive }) => `flex min-h-12 items-center gap-3 rounded-2xl px-4 py-3 text-sm font-semibold transition-all duration-200 ${isActive ? "bg-kcs-blue-700 text-white shadow-kcs" : "text-kcs-blue-900 dark:text-gray-200 hover:bg-kcs-blue-50 dark:hover:bg-white/10"}`,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-kcs-blue-700 shadow-sm dark:bg-kcs-blue-950 dark:text-kcs-blue-200", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { size: 17 }) }),
                    label
                  ]
                },
                to
              )),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 flex gap-2 border-t border-gray-100 pt-3 dark:border-kcs-blue-800", children: isAuthenticated ? /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: dashboardPath, onClick: () => setMobileOpen(false), className: "flex-1 rounded-2xl bg-kcs-blue-700 px-4 py-3 text-center text-sm font-bold text-white shadow-kcs", children: t("nav.dashboard") }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/login", onClick: () => setMobileOpen(false), className: "flex-1 rounded-2xl bg-kcs-blue-700 px-4 py-3 text-center text-sm font-bold text-white shadow-kcs", children: t("nav.login") }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/admissions", onClick: () => setMobileOpen(false), className: "public-apply-button flex-1 rounded-2xl px-4 py-3 text-center text-sm font-bold text-white shadow-kcs", children: t("nav.applyNow") })
              ] }) })
            ] }) })
          }
        ) })
      ]
    }
  );
};
const Footer = () => {
  const { t } = useTranslation();
  const logoSrc = getAssetUrl("images/kcs.jpg");
  const quickLinks = [
    { to: "/about", label: t("nav.about") },
    { to: "/academics", label: t("nav.academics") },
    { to: "/news", label: t("nav.news") },
    { to: "/admissions", label: t("nav.admissions") },
    { to: "/gallery", label: t("nav.gallery") },
    { to: "/contact", label: t("nav.contact") }
  ];
  const programs = [
    { to: "/academics#kindergarten", label: "K3-K5" },
    { to: "/academics#elementary", label: "Elementary" },
    { to: "/academics#middle", label: "Middle School" },
    { to: "/academics#high", label: "High School" },
    { to: "/academics#spiritual-life", label: "Spiritual Life" },
    { to: "/news", label: "Events & News" }
  ];
  const portals = [
    { to: "/login", label: "Student Portal" },
    { to: "/login", label: "Parent Portal" },
    { to: "/login", label: "Teacher Portal" },
    { to: "/login", label: "Admin Panel" }
  ];
  const socials = [
    { icon: Facebook, href: "https://www.facebook.com/KinshasaChristianSchool", label: "Facebook" },
    { icon: Instagram, href: "https://www.instagram.com/kinshasachristianschoolknights", label: "Instagram" },
    { icon: Youtube, href: "https://wa.me/243895326011", label: "WhatsApp" },
    { icon: Linkedin, href: "#", label: "LinkedIn" }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { className: "public-footer bg-kcs-blue-950 dark:bg-gray-950 text-white", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "public-footer-cta bg-gradient-to-r from-kcs-blue-700 via-kcs-blue-600 to-kcs-blue-800 py-12", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container-custom", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col md:flex-row items-center justify-between gap-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold font-display mb-1", children: "Ready to Join the KCS Family?" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-kcs-blue-100 text-sm", children: "Online registration is open for families who want a faith-based education." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Link,
          {
            to: "/admissions",
            className: "public-footer-primary flex items-center gap-2 bg-kcs-gold-500 hover:bg-kcs-gold-400 text-kcs-blue-900 font-bold px-6 py-3 rounded-xl transition-all duration-300 hover:shadow-gold",
            children: [
              "Apply Now",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 18 })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Link,
          {
            to: "/contact",
            className: "public-footer-secondary flex items-center gap-2 border-2 border-white/30 hover:border-white text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300",
            children: "Contact Us"
          }
        )
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container-custom", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "flex items-center gap-3 mb-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-14 h-14 rounded-lg bg-white flex items-center justify-center shadow-kcs p-1.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: logoSrc, alt: "Kinshasa Christian School", className: "h-full w-full object-contain" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-sm leading-tight font-display text-white", children: "Kinshasa Christian" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-medium text-kcs-gold-400", children: "Letting Our Light Shine" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-kcs-blue-200 text-sm leading-relaxed mb-5", children: "We are committed to help raise the next generation of leaders through quality Christian education, compassion, mercy, and academic excellence." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-3 rounded-xl bg-kcs-blue-900/50 border border-kcs-blue-700/50", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(BookOpen, { size: 14, className: "text-kcs-gold-400 mt-0.5 flex-shrink-0" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-kcs-blue-200 text-xs italic leading-relaxed", children: '"Let your light shine before people."' }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-kcs-gold-400 text-xs font-medium mt-1", children: "Matthew 5:16" })
          ] })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-3 mt-5", children: socials.map(({ icon: Icon, href, label }) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "a",
          {
            href,
            "aria-label": label,
            className: "w-9 h-9 rounded-lg bg-kcs-blue-800 hover:bg-kcs-blue-600 flex items-center justify-center text-kcs-blue-300 hover:text-white transition-all duration-200",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { size: 16 })
          },
          label
        )) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-sm uppercase tracking-wider text-kcs-gold-400 mb-4", children: "Quick Links" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2", children: quickLinks.map(({ to, label }) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Link,
          {
            to,
            className: "flex items-center gap-2 text-kcs-blue-200 hover:text-white text-sm transition-colors duration-200 group",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 14, className: "text-kcs-blue-500 group-hover:text-kcs-gold-400 transition-colors duration-200" }),
              label
            ]
          }
        ) }, to)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-sm uppercase tracking-wider text-kcs-gold-400 mb-4 mt-6", children: "Portals" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2", children: portals.map(({ to, label }) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Link,
          {
            to,
            className: "flex items-center gap-2 text-kcs-blue-200 hover:text-white text-sm transition-colors duration-200 group",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 14, className: "text-kcs-blue-500 group-hover:text-kcs-gold-400 transition-colors duration-200" }),
              label
            ]
          }
        ) }, label)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-sm uppercase tracking-wider text-kcs-gold-400 mb-4", children: "Academic Programs" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2", children: programs.map(({ to, label }) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Link,
          {
            to,
            className: "flex items-center gap-2 text-kcs-blue-200 hover:text-white text-sm transition-colors duration-200 group",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 14, className: "text-kcs-blue-500 group-hover:text-kcs-gold-400 transition-colors duration-200" }),
              label
            ]
          }
        ) }, label)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 p-4 rounded-xl bg-kcs-blue-900/50 border border-kcs-blue-700/50", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-kcs-gold-400 mb-1 uppercase tracking-wider", children: "Accredited By" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-kcs-blue-200 text-sm font-medium", children: "K3-K5, Grade 1-Grade 5, Grade 6-Grade 8, and Grade 9-Grade 12" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-kcs-blue-300 text-xs mt-1", children: "Faith-based learning with a biblical worldview" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-sm uppercase tracking-wider text-kcs-gold-400 mb-4", children: "Contact Us" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3 text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { size: 16, className: "text-kcs-gold-400 mt-0.5 flex-shrink-0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white font-medium", children: "KCS Campus" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-kcs-blue-200", children: "Avenue de la Republique n° 1," }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-kcs-blue-200", children: "Macampagne, Ngaliema," }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-kcs-blue-200", children: "Kinshasa, DRC, Ref. 80 jours" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { size: 16, className: "text-kcs-gold-400 flex-shrink-0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-kcs-blue-200", children: "+243 895 326 011" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-kcs-blue-200", children: "+243 994 645 735" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { size: 16, className: "text-kcs-gold-400 flex-shrink-0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-kcs-blue-200", children: "kinshasachristianschool@gmail.com" }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3 text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { size: 16, className: "text-kcs-gold-400 mt-0.5 flex-shrink-0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white font-medium", children: "Office Hours" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-kcs-blue-200", children: "Mon–Fri: 7:30 AM – 4:30 PM" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-kcs-blue-200", children: "Saturday: 8:00 AM – 12:00 PM" })
            ] })
          ] })
        ] })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-t border-kcs-blue-800 py-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-custom flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-kcs-blue-400", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
        "© ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " Kinshasa Christian School. All rights reserved."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/privacy", className: "hover:text-white transition-colors", children: "Privacy Policy" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/terms", className: "hover:text-white transition-colors", children: "Terms of Service" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/sitemap", className: "hover:text-white transition-colors", children: "Sitemap" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-kcs-blue-500", children: [
        "Powered by ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-kcs-gold-500 font-medium", children: "KCS Nexus" })
      ] })
    ] }) })
  ] });
};
function bind(fn, thisArg) {
  return function wrap() {
    return fn.apply(thisArg, arguments);
  };
}
const { toString } = Object.prototype;
const { getPrototypeOf } = Object;
const { iterator, toStringTag } = Symbol;
const kindOf = /* @__PURE__ */ ((cache) => (thing) => {
  const str = toString.call(thing);
  return cache[str] || (cache[str] = str.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null));
const kindOfTest = (type) => {
  type = type.toLowerCase();
  return (thing) => kindOf(thing) === type;
};
const typeOfTest = (type) => (thing) => typeof thing === type;
const { isArray } = Array;
const isUndefined = typeOfTest("undefined");
function isBuffer(val) {
  return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor) && isFunction$1(val.constructor.isBuffer) && val.constructor.isBuffer(val);
}
const isArrayBuffer = kindOfTest("ArrayBuffer");
function isArrayBufferView(val) {
  let result;
  if (typeof ArrayBuffer !== "undefined" && ArrayBuffer.isView) {
    result = ArrayBuffer.isView(val);
  } else {
    result = val && val.buffer && isArrayBuffer(val.buffer);
  }
  return result;
}
const isString$1 = typeOfTest("string");
const isFunction$1 = typeOfTest("function");
const isNumber = typeOfTest("number");
const isObject = (thing) => thing !== null && typeof thing === "object";
const isBoolean = (thing) => thing === true || thing === false;
const isPlainObject = (val) => {
  if (kindOf(val) !== "object") {
    return false;
  }
  const prototype2 = getPrototypeOf(val);
  return (prototype2 === null || prototype2 === Object.prototype || Object.getPrototypeOf(prototype2) === null) && !(toStringTag in val) && !(iterator in val);
};
const isEmptyObject = (val) => {
  if (!isObject(val) || isBuffer(val)) {
    return false;
  }
  try {
    return Object.keys(val).length === 0 && Object.getPrototypeOf(val) === Object.prototype;
  } catch (e) {
    return false;
  }
};
const isDate = kindOfTest("Date");
const isFile = kindOfTest("File");
const isReactNativeBlob = (value) => {
  return !!(value && typeof value.uri !== "undefined");
};
const isReactNative = (formData) => formData && typeof formData.getParts !== "undefined";
const isBlob = kindOfTest("Blob");
const isFileList = kindOfTest("FileList");
const isStream = (val) => isObject(val) && isFunction$1(val.pipe);
function getGlobal() {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  return {};
}
const G = getGlobal();
const FormDataCtor = typeof G.FormData !== "undefined" ? G.FormData : void 0;
const isFormData = (thing) => {
  if (!thing) return false;
  if (FormDataCtor && thing instanceof FormDataCtor) return true;
  const proto = getPrototypeOf(thing);
  if (!proto || proto === Object.prototype) return false;
  if (!isFunction$1(thing.append)) return false;
  const kind = kindOf(thing);
  return kind === "formdata" || // detect form-data instance
  kind === "object" && isFunction$1(thing.toString) && thing.toString() === "[object FormData]";
};
const isURLSearchParams = kindOfTest("URLSearchParams");
const [isReadableStream, isRequest, isResponse, isHeaders] = [
  "ReadableStream",
  "Request",
  "Response",
  "Headers"
].map(kindOfTest);
const trim = (str) => {
  return str.trim ? str.trim() : str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
};
function forEach(obj, fn, { allOwnKeys = false } = {}) {
  if (obj === null || typeof obj === "undefined") {
    return;
  }
  let i;
  let l;
  if (typeof obj !== "object") {
    obj = [obj];
  }
  if (isArray(obj)) {
    for (i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    if (isBuffer(obj)) {
      return;
    }
    const keys = allOwnKeys ? Object.getOwnPropertyNames(obj) : Object.keys(obj);
    const len = keys.length;
    let key;
    for (i = 0; i < len; i++) {
      key = keys[i];
      fn.call(null, obj[key], key, obj);
    }
  }
}
function findKey(obj, key) {
  if (isBuffer(obj)) {
    return null;
  }
  key = key.toLowerCase();
  const keys = Object.keys(obj);
  let i = keys.length;
  let _key;
  while (i-- > 0) {
    _key = keys[i];
    if (key === _key.toLowerCase()) {
      return _key;
    }
  }
  return null;
}
const _global = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  return typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : global;
})();
const isContextDefined = (context) => !isUndefined(context) && context !== _global;
function merge() {
  const { caseless, skipUndefined } = isContextDefined(this) && this || {};
  const result = {};
  const assignValue = (val, key) => {
    if (key === "__proto__" || key === "constructor" || key === "prototype") {
      return;
    }
    const targetKey = caseless && findKey(result, key) || key;
    if (isPlainObject(result[targetKey]) && isPlainObject(val)) {
      result[targetKey] = merge(result[targetKey], val);
    } else if (isPlainObject(val)) {
      result[targetKey] = merge({}, val);
    } else if (isArray(val)) {
      result[targetKey] = val.slice();
    } else if (!skipUndefined || !isUndefined(val)) {
      result[targetKey] = val;
    }
  };
  for (let i = 0, l = arguments.length; i < l; i++) {
    arguments[i] && forEach(arguments[i], assignValue);
  }
  return result;
}
const extend = (a, b, thisArg, { allOwnKeys } = {}) => {
  forEach(
    b,
    (val, key) => {
      if (thisArg && isFunction$1(val)) {
        Object.defineProperty(a, key, {
          value: bind(val, thisArg),
          writable: true,
          enumerable: true,
          configurable: true
        });
      } else {
        Object.defineProperty(a, key, {
          value: val,
          writable: true,
          enumerable: true,
          configurable: true
        });
      }
    },
    { allOwnKeys }
  );
  return a;
};
const stripBOM = (content) => {
  if (content.charCodeAt(0) === 65279) {
    content = content.slice(1);
  }
  return content;
};
const inherits = (constructor, superConstructor, props, descriptors) => {
  constructor.prototype = Object.create(superConstructor.prototype, descriptors);
  Object.defineProperty(constructor.prototype, "constructor", {
    value: constructor,
    writable: true,
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(constructor, "super", {
    value: superConstructor.prototype
  });
  props && Object.assign(constructor.prototype, props);
};
const toFlatObject = (sourceObj, destObj, filter2, propFilter) => {
  let props;
  let i;
  let prop;
  const merged = {};
  destObj = destObj || {};
  if (sourceObj == null) return destObj;
  do {
    props = Object.getOwnPropertyNames(sourceObj);
    i = props.length;
    while (i-- > 0) {
      prop = props[i];
      if ((!propFilter || propFilter(prop, sourceObj, destObj)) && !merged[prop]) {
        destObj[prop] = sourceObj[prop];
        merged[prop] = true;
      }
    }
    sourceObj = filter2 !== false && getPrototypeOf(sourceObj);
  } while (sourceObj && (!filter2 || filter2(sourceObj, destObj)) && sourceObj !== Object.prototype);
  return destObj;
};
const endsWith = (str, searchString, position) => {
  str = String(str);
  if (position === void 0 || position > str.length) {
    position = str.length;
  }
  position -= searchString.length;
  const lastIndex = str.indexOf(searchString, position);
  return lastIndex !== -1 && lastIndex === position;
};
const toArray = (thing) => {
  if (!thing) return null;
  if (isArray(thing)) return thing;
  let i = thing.length;
  if (!isNumber(i)) return null;
  const arr = new Array(i);
  while (i-- > 0) {
    arr[i] = thing[i];
  }
  return arr;
};
const isTypedArray = /* @__PURE__ */ ((TypedArray) => {
  return (thing) => {
    return TypedArray && thing instanceof TypedArray;
  };
})(typeof Uint8Array !== "undefined" && getPrototypeOf(Uint8Array));
const forEachEntry = (obj, fn) => {
  const generator = obj && obj[iterator];
  const _iterator = generator.call(obj);
  let result;
  while ((result = _iterator.next()) && !result.done) {
    const pair = result.value;
    fn.call(obj, pair[0], pair[1]);
  }
};
const matchAll = (regExp, str) => {
  let matches;
  const arr = [];
  while ((matches = regExp.exec(str)) !== null) {
    arr.push(matches);
  }
  return arr;
};
const isHTMLForm = kindOfTest("HTMLFormElement");
const toCamelCase = (str) => {
  return str.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function replacer(m2, p1, p2) {
    return p1.toUpperCase() + p2;
  });
};
const hasOwnProperty = (({ hasOwnProperty: hasOwnProperty2 }) => (obj, prop) => hasOwnProperty2.call(obj, prop))(Object.prototype);
const isRegExp = kindOfTest("RegExp");
const reduceDescriptors = (obj, reducer) => {
  const descriptors = Object.getOwnPropertyDescriptors(obj);
  const reducedDescriptors = {};
  forEach(descriptors, (descriptor, name) => {
    let ret;
    if ((ret = reducer(descriptor, name, obj)) !== false) {
      reducedDescriptors[name] = ret || descriptor;
    }
  });
  Object.defineProperties(obj, reducedDescriptors);
};
const freezeMethods = (obj) => {
  reduceDescriptors(obj, (descriptor, name) => {
    if (isFunction$1(obj) && ["arguments", "caller", "callee"].indexOf(name) !== -1) {
      return false;
    }
    const value = obj[name];
    if (!isFunction$1(value)) return;
    descriptor.enumerable = false;
    if ("writable" in descriptor) {
      descriptor.writable = false;
      return;
    }
    if (!descriptor.set) {
      descriptor.set = () => {
        throw Error("Can not rewrite read-only method '" + name + "'");
      };
    }
  });
};
const toObjectSet = (arrayOrString, delimiter) => {
  const obj = {};
  const define = (arr) => {
    arr.forEach((value) => {
      obj[value] = true;
    });
  };
  isArray(arrayOrString) ? define(arrayOrString) : define(String(arrayOrString).split(delimiter));
  return obj;
};
const noop$1 = () => {
};
const toFiniteNumber = (value, defaultValue) => {
  return value != null && Number.isFinite(value = +value) ? value : defaultValue;
};
function isSpecCompliantForm(thing) {
  return !!(thing && isFunction$1(thing.append) && thing[toStringTag] === "FormData" && thing[iterator]);
}
const toJSONObject = (obj) => {
  const stack = new Array(10);
  const visit = (source, i) => {
    if (isObject(source)) {
      if (stack.indexOf(source) >= 0) {
        return;
      }
      if (isBuffer(source)) {
        return source;
      }
      if (!("toJSON" in source)) {
        stack[i] = source;
        const target = isArray(source) ? [] : {};
        forEach(source, (value, key) => {
          const reducedValue = visit(value, i + 1);
          !isUndefined(reducedValue) && (target[key] = reducedValue);
        });
        stack[i] = void 0;
        return target;
      }
    }
    return source;
  };
  return visit(obj, 0);
};
const isAsyncFn = kindOfTest("AsyncFunction");
const isThenable = (thing) => thing && (isObject(thing) || isFunction$1(thing)) && isFunction$1(thing.then) && isFunction$1(thing.catch);
const _setImmediate = ((setImmediateSupported, postMessageSupported) => {
  if (setImmediateSupported) {
    return setImmediate;
  }
  return postMessageSupported ? ((token, callbacks) => {
    _global.addEventListener(
      "message",
      ({ source, data }) => {
        if (source === _global && data === token) {
          callbacks.length && callbacks.shift()();
        }
      },
      false
    );
    return (cb) => {
      callbacks.push(cb);
      _global.postMessage(token, "*");
    };
  })(`axios@${Math.random()}`, []) : (cb) => setTimeout(cb);
})(typeof setImmediate === "function", isFunction$1(_global.postMessage));
const asap = typeof queueMicrotask !== "undefined" ? queueMicrotask.bind(_global) : typeof process !== "undefined" && process.nextTick || _setImmediate;
const isIterable = (thing) => thing != null && isFunction$1(thing[iterator]);
const utils$1 = {
  isArray,
  isArrayBuffer,
  isBuffer,
  isFormData,
  isArrayBufferView,
  isString: isString$1,
  isNumber,
  isBoolean,
  isObject,
  isPlainObject,
  isEmptyObject,
  isReadableStream,
  isRequest,
  isResponse,
  isHeaders,
  isUndefined,
  isDate,
  isFile,
  isReactNativeBlob,
  isReactNative,
  isBlob,
  isRegExp,
  isFunction: isFunction$1,
  isStream,
  isURLSearchParams,
  isTypedArray,
  isFileList,
  forEach,
  merge,
  extend,
  trim,
  stripBOM,
  inherits,
  toFlatObject,
  kindOf,
  kindOfTest,
  endsWith,
  toArray,
  forEachEntry,
  matchAll,
  isHTMLForm,
  hasOwnProperty,
  hasOwnProp: hasOwnProperty,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors,
  freezeMethods,
  toObjectSet,
  toCamelCase,
  noop: noop$1,
  toFiniteNumber,
  findKey,
  global: _global,
  isContextDefined,
  isSpecCompliantForm,
  toJSONObject,
  isAsyncFn,
  isThenable,
  setImmediate: _setImmediate,
  asap,
  isIterable
};
let AxiosError$1 = class AxiosError extends Error {
  static from(error, code, config, request, response, customProps) {
    const axiosError = new AxiosError(error.message, code || error.code, config, request, response);
    axiosError.cause = error;
    axiosError.name = error.name;
    if (error.status != null && axiosError.status == null) {
      axiosError.status = error.status;
    }
    customProps && Object.assign(axiosError, customProps);
    return axiosError;
  }
  /**
   * Create an Error with the specified message, config, error code, request and response.
   *
   * @param {string} message The error message.
   * @param {string} [code] The error code (for example, 'ECONNABORTED').
   * @param {Object} [config] The config.
   * @param {Object} [request] The request.
   * @param {Object} [response] The response.
   *
   * @returns {Error} The created error.
   */
  constructor(message, code, config, request, response) {
    super(message);
    Object.defineProperty(this, "message", {
      value: message,
      enumerable: true,
      writable: true,
      configurable: true
    });
    this.name = "AxiosError";
    this.isAxiosError = true;
    code && (this.code = code);
    config && (this.config = config);
    request && (this.request = request);
    if (response) {
      this.response = response;
      this.status = response.status;
    }
  }
  toJSON() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: utils$1.toJSONObject(this.config),
      code: this.code,
      status: this.status
    };
  }
};
AxiosError$1.ERR_BAD_OPTION_VALUE = "ERR_BAD_OPTION_VALUE";
AxiosError$1.ERR_BAD_OPTION = "ERR_BAD_OPTION";
AxiosError$1.ECONNABORTED = "ECONNABORTED";
AxiosError$1.ETIMEDOUT = "ETIMEDOUT";
AxiosError$1.ERR_NETWORK = "ERR_NETWORK";
AxiosError$1.ERR_FR_TOO_MANY_REDIRECTS = "ERR_FR_TOO_MANY_REDIRECTS";
AxiosError$1.ERR_DEPRECATED = "ERR_DEPRECATED";
AxiosError$1.ERR_BAD_RESPONSE = "ERR_BAD_RESPONSE";
AxiosError$1.ERR_BAD_REQUEST = "ERR_BAD_REQUEST";
AxiosError$1.ERR_CANCELED = "ERR_CANCELED";
AxiosError$1.ERR_NOT_SUPPORT = "ERR_NOT_SUPPORT";
AxiosError$1.ERR_INVALID_URL = "ERR_INVALID_URL";
AxiosError$1.ERR_FORM_DATA_DEPTH_EXCEEDED = "ERR_FORM_DATA_DEPTH_EXCEEDED";
const httpAdapter = null;
function isVisitable(thing) {
  return utils$1.isPlainObject(thing) || utils$1.isArray(thing);
}
function removeBrackets(key) {
  return utils$1.endsWith(key, "[]") ? key.slice(0, -2) : key;
}
function renderKey(path, key, dots) {
  if (!path) return key;
  return path.concat(key).map(function each(token, i) {
    token = removeBrackets(token);
    return !dots && i ? "[" + token + "]" : token;
  }).join(dots ? "." : "");
}
function isFlatArray(arr) {
  return utils$1.isArray(arr) && !arr.some(isVisitable);
}
const predicates = utils$1.toFlatObject(utils$1, {}, null, function filter(prop) {
  return /^is[A-Z]/.test(prop);
});
function toFormData$1(obj, formData, options) {
  if (!utils$1.isObject(obj)) {
    throw new TypeError("target must be an object");
  }
  formData = formData || new FormData();
  options = utils$1.toFlatObject(
    options,
    {
      metaTokens: true,
      dots: false,
      indexes: false
    },
    false,
    function defined(option, source) {
      return !utils$1.isUndefined(source[option]);
    }
  );
  const metaTokens = options.metaTokens;
  const visitor = options.visitor || defaultVisitor;
  const dots = options.dots;
  const indexes = options.indexes;
  const _Blob = options.Blob || typeof Blob !== "undefined" && Blob;
  const maxDepth = options.maxDepth === void 0 ? 100 : options.maxDepth;
  const useBlob = _Blob && utils$1.isSpecCompliantForm(formData);
  if (!utils$1.isFunction(visitor)) {
    throw new TypeError("visitor must be a function");
  }
  function convertValue(value) {
    if (value === null) return "";
    if (utils$1.isDate(value)) {
      return value.toISOString();
    }
    if (utils$1.isBoolean(value)) {
      return value.toString();
    }
    if (!useBlob && utils$1.isBlob(value)) {
      throw new AxiosError$1("Blob is not supported. Use a Buffer instead.");
    }
    if (utils$1.isArrayBuffer(value) || utils$1.isTypedArray(value)) {
      return useBlob && typeof Blob === "function" ? new Blob([value]) : Buffer.from(value);
    }
    return value;
  }
  function defaultVisitor(value, key, path) {
    let arr = value;
    if (utils$1.isReactNative(formData) && utils$1.isReactNativeBlob(value)) {
      formData.append(renderKey(path, key, dots), convertValue(value));
      return false;
    }
    if (value && !path && typeof value === "object") {
      if (utils$1.endsWith(key, "{}")) {
        key = metaTokens ? key : key.slice(0, -2);
        value = JSON.stringify(value);
      } else if (utils$1.isArray(value) && isFlatArray(value) || (utils$1.isFileList(value) || utils$1.endsWith(key, "[]")) && (arr = utils$1.toArray(value))) {
        key = removeBrackets(key);
        arr.forEach(function each(el, index) {
          !(utils$1.isUndefined(el) || el === null) && formData.append(
            // eslint-disable-next-line no-nested-ternary
            indexes === true ? renderKey([key], index, dots) : indexes === null ? key : key + "[]",
            convertValue(el)
          );
        });
        return false;
      }
    }
    if (isVisitable(value)) {
      return true;
    }
    formData.append(renderKey(path, key, dots), convertValue(value));
    return false;
  }
  const stack = [];
  const exposedHelpers = Object.assign(predicates, {
    defaultVisitor,
    convertValue,
    isVisitable
  });
  function build(value, path, depth = 0) {
    if (utils$1.isUndefined(value)) return;
    if (depth > maxDepth) {
      throw new AxiosError$1(
        "Object is too deeply nested (" + depth + " levels). Max depth: " + maxDepth,
        AxiosError$1.ERR_FORM_DATA_DEPTH_EXCEEDED
      );
    }
    if (stack.indexOf(value) !== -1) {
      throw Error("Circular reference detected in " + path.join("."));
    }
    stack.push(value);
    utils$1.forEach(value, function each(el, key) {
      const result = !(utils$1.isUndefined(el) || el === null) && visitor.call(formData, el, utils$1.isString(key) ? key.trim() : key, path, exposedHelpers);
      if (result === true) {
        build(el, path ? path.concat(key) : [key], depth + 1);
      }
    });
    stack.pop();
  }
  if (!utils$1.isObject(obj)) {
    throw new TypeError("data must be an object");
  }
  build(obj);
  return formData;
}
function encode$1(str) {
  const charMap = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+"
  };
  return encodeURIComponent(str).replace(/[!'()~]|%20/g, function replacer(match) {
    return charMap[match];
  });
}
function AxiosURLSearchParams(params, options) {
  this._pairs = [];
  params && toFormData$1(params, this, options);
}
const prototype = AxiosURLSearchParams.prototype;
prototype.append = function append(name, value) {
  this._pairs.push([name, value]);
};
prototype.toString = function toString2(encoder) {
  const _encode = encoder ? function(value) {
    return encoder.call(this, value, encode$1);
  } : encode$1;
  return this._pairs.map(function each(pair) {
    return _encode(pair[0]) + "=" + _encode(pair[1]);
  }, "").join("&");
};
function encode(val) {
  return encodeURIComponent(val).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+");
}
function buildURL(url, params, options) {
  if (!params) {
    return url;
  }
  const _encode = options && options.encode || encode;
  const _options = utils$1.isFunction(options) ? {
    serialize: options
  } : options;
  const serializeFn = _options && _options.serialize;
  let serializedParams;
  if (serializeFn) {
    serializedParams = serializeFn(params, _options);
  } else {
    serializedParams = utils$1.isURLSearchParams(params) ? params.toString() : new AxiosURLSearchParams(params, _options).toString(_encode);
  }
  if (serializedParams) {
    const hashmarkIndex = url.indexOf("#");
    if (hashmarkIndex !== -1) {
      url = url.slice(0, hashmarkIndex);
    }
    url += (url.indexOf("?") === -1 ? "?" : "&") + serializedParams;
  }
  return url;
}
class InterceptorManager {
  constructor() {
    this.handlers = [];
  }
  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   * @param {Object} options The options for the interceptor, synchronous and runWhen
   *
   * @return {Number} An ID used to remove interceptor later
   */
  use(fulfilled, rejected, options) {
    this.handlers.push({
      fulfilled,
      rejected,
      synchronous: options ? options.synchronous : false,
      runWhen: options ? options.runWhen : null
    });
    return this.handlers.length - 1;
  }
  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {void}
   */
  eject(id) {
    if (this.handlers[id]) {
      this.handlers[id] = null;
    }
  }
  /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */
  clear() {
    if (this.handlers) {
      this.handlers = [];
    }
  }
  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */
  forEach(fn) {
    utils$1.forEach(this.handlers, function forEachHandler(h) {
      if (h !== null) {
        fn(h);
      }
    });
  }
}
const transitionalDefaults = {
  silentJSONParsing: true,
  forcedJSONParsing: true,
  clarifyTimeoutError: false,
  legacyInterceptorReqResOrdering: true
};
const URLSearchParams$1 = typeof URLSearchParams !== "undefined" ? URLSearchParams : AxiosURLSearchParams;
const FormData$1 = typeof FormData !== "undefined" ? FormData : null;
const Blob$1 = typeof Blob !== "undefined" ? Blob : null;
const platform$1 = {
  isBrowser: true,
  classes: {
    URLSearchParams: URLSearchParams$1,
    FormData: FormData$1,
    Blob: Blob$1
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
};
const hasBrowserEnv = typeof window !== "undefined" && typeof document !== "undefined";
const _navigator = typeof navigator === "object" && navigator || void 0;
const hasStandardBrowserEnv = hasBrowserEnv && (!_navigator || ["ReactNative", "NativeScript", "NS"].indexOf(_navigator.product) < 0);
const hasStandardBrowserWebWorkerEnv = (() => {
  return typeof WorkerGlobalScope !== "undefined" && // eslint-disable-next-line no-undef
  self instanceof WorkerGlobalScope && typeof self.importScripts === "function";
})();
const origin = hasBrowserEnv && window.location.href || "http://localhost";
const utils = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv,
  hasStandardBrowserEnv,
  hasStandardBrowserWebWorkerEnv,
  navigator: _navigator,
  origin
}, Symbol.toStringTag, { value: "Module" }));
const platform = {
  ...utils,
  ...platform$1
};
function toURLEncodedForm(data, options) {
  return toFormData$1(data, new platform.classes.URLSearchParams(), {
    visitor: function(value, key, path, helpers) {
      if (platform.isNode && utils$1.isBuffer(value)) {
        this.append(key, value.toString("base64"));
        return false;
      }
      return helpers.defaultVisitor.apply(this, arguments);
    },
    ...options
  });
}
function parsePropPath(name) {
  return utils$1.matchAll(/\w+|\[(\w*)]/g, name).map((match) => {
    return match[0] === "[]" ? "" : match[1] || match[0];
  });
}
function arrayToObject(arr) {
  const obj = {};
  const keys = Object.keys(arr);
  let i;
  const len = keys.length;
  let key;
  for (i = 0; i < len; i++) {
    key = keys[i];
    obj[key] = arr[key];
  }
  return obj;
}
function formDataToJSON(formData) {
  function buildPath(path, value, target, index) {
    let name = path[index++];
    if (name === "__proto__") return true;
    const isNumericKey = Number.isFinite(+name);
    const isLast = index >= path.length;
    name = !name && utils$1.isArray(target) ? target.length : name;
    if (isLast) {
      if (utils$1.hasOwnProp(target, name)) {
        target[name] = utils$1.isArray(target[name]) ? target[name].concat(value) : [target[name], value];
      } else {
        target[name] = value;
      }
      return !isNumericKey;
    }
    if (!target[name] || !utils$1.isObject(target[name])) {
      target[name] = [];
    }
    const result = buildPath(path, value, target[name], index);
    if (result && utils$1.isArray(target[name])) {
      target[name] = arrayToObject(target[name]);
    }
    return !isNumericKey;
  }
  if (utils$1.isFormData(formData) && utils$1.isFunction(formData.entries)) {
    const obj = {};
    utils$1.forEachEntry(formData, (name, value) => {
      buildPath(parsePropPath(name), value, obj, 0);
    });
    return obj;
  }
  return null;
}
const own = (obj, key) => obj != null && utils$1.hasOwnProp(obj, key) ? obj[key] : void 0;
function stringifySafely(rawValue, parser, encoder) {
  if (utils$1.isString(rawValue)) {
    try {
      (parser || JSON.parse)(rawValue);
      return utils$1.trim(rawValue);
    } catch (e) {
      if (e.name !== "SyntaxError") {
        throw e;
      }
    }
  }
  return (encoder || JSON.stringify)(rawValue);
}
const defaults = {
  transitional: transitionalDefaults,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [
    function transformRequest(data, headers) {
      const contentType = headers.getContentType() || "";
      const hasJSONContentType = contentType.indexOf("application/json") > -1;
      const isObjectPayload = utils$1.isObject(data);
      if (isObjectPayload && utils$1.isHTMLForm(data)) {
        data = new FormData(data);
      }
      const isFormData2 = utils$1.isFormData(data);
      if (isFormData2) {
        return hasJSONContentType ? JSON.stringify(formDataToJSON(data)) : data;
      }
      if (utils$1.isArrayBuffer(data) || utils$1.isBuffer(data) || utils$1.isStream(data) || utils$1.isFile(data) || utils$1.isBlob(data) || utils$1.isReadableStream(data)) {
        return data;
      }
      if (utils$1.isArrayBufferView(data)) {
        return data.buffer;
      }
      if (utils$1.isURLSearchParams(data)) {
        headers.setContentType("application/x-www-form-urlencoded;charset=utf-8", false);
        return data.toString();
      }
      let isFileList2;
      if (isObjectPayload) {
        const formSerializer = own(this, "formSerializer");
        if (contentType.indexOf("application/x-www-form-urlencoded") > -1) {
          return toURLEncodedForm(data, formSerializer).toString();
        }
        if ((isFileList2 = utils$1.isFileList(data)) || contentType.indexOf("multipart/form-data") > -1) {
          const env = own(this, "env");
          const _FormData = env && env.FormData;
          return toFormData$1(
            isFileList2 ? { "files[]": data } : data,
            _FormData && new _FormData(),
            formSerializer
          );
        }
      }
      if (isObjectPayload || hasJSONContentType) {
        headers.setContentType("application/json", false);
        return stringifySafely(data);
      }
      return data;
    }
  ],
  transformResponse: [
    function transformResponse(data) {
      const transitional2 = own(this, "transitional") || defaults.transitional;
      const forcedJSONParsing = transitional2 && transitional2.forcedJSONParsing;
      const responseType = own(this, "responseType");
      const JSONRequested = responseType === "json";
      if (utils$1.isResponse(data) || utils$1.isReadableStream(data)) {
        return data;
      }
      if (data && utils$1.isString(data) && (forcedJSONParsing && !responseType || JSONRequested)) {
        const silentJSONParsing = transitional2 && transitional2.silentJSONParsing;
        const strictJSONParsing = !silentJSONParsing && JSONRequested;
        try {
          return JSON.parse(data, own(this, "parseReviver"));
        } catch (e) {
          if (strictJSONParsing) {
            if (e.name === "SyntaxError") {
              throw AxiosError$1.from(e, AxiosError$1.ERR_BAD_RESPONSE, this, null, own(this, "response"));
            }
            throw e;
          }
        }
      }
      return data;
    }
  ],
  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: platform.classes.FormData,
    Blob: platform.classes.Blob
  },
  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0
    }
  }
};
utils$1.forEach(["delete", "get", "head", "post", "put", "patch"], (method) => {
  defaults.headers[method] = {};
});
const ignoreDuplicateOf = utils$1.toObjectSet([
  "age",
  "authorization",
  "content-length",
  "content-type",
  "etag",
  "expires",
  "from",
  "host",
  "if-modified-since",
  "if-unmodified-since",
  "last-modified",
  "location",
  "max-forwards",
  "proxy-authorization",
  "referer",
  "retry-after",
  "user-agent"
]);
const parseHeaders = (rawHeaders) => {
  const parsed = {};
  let key;
  let val;
  let i;
  rawHeaders && rawHeaders.split("\n").forEach(function parser(line) {
    i = line.indexOf(":");
    key = line.substring(0, i).trim().toLowerCase();
    val = line.substring(i + 1).trim();
    if (!key || parsed[key] && ignoreDuplicateOf[key]) {
      return;
    }
    if (key === "set-cookie") {
      if (parsed[key]) {
        parsed[key].push(val);
      } else {
        parsed[key] = [val];
      }
    } else {
      parsed[key] = parsed[key] ? parsed[key] + ", " + val : val;
    }
  });
  return parsed;
};
const $internals = Symbol("internals");
const INVALID_HEADER_VALUE_CHARS_RE = /[^\x09\x20-\x7E\x80-\xFF]/g;
function trimSPorHTAB(str) {
  let start = 0;
  let end = str.length;
  while (start < end) {
    const code = str.charCodeAt(start);
    if (code !== 9 && code !== 32) {
      break;
    }
    start += 1;
  }
  while (end > start) {
    const code = str.charCodeAt(end - 1);
    if (code !== 9 && code !== 32) {
      break;
    }
    end -= 1;
  }
  return start === 0 && end === str.length ? str : str.slice(start, end);
}
function normalizeHeader(header) {
  return header && String(header).trim().toLowerCase();
}
function sanitizeHeaderValue(str) {
  return trimSPorHTAB(str.replace(INVALID_HEADER_VALUE_CHARS_RE, ""));
}
function normalizeValue(value) {
  if (value === false || value == null) {
    return value;
  }
  return utils$1.isArray(value) ? value.map(normalizeValue) : sanitizeHeaderValue(String(value));
}
function parseTokens(str) {
  const tokens = /* @__PURE__ */ Object.create(null);
  const tokensRE = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let match;
  while (match = tokensRE.exec(str)) {
    tokens[match[1]] = match[2];
  }
  return tokens;
}
const isValidHeaderName = (str) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(str.trim());
function matchHeaderValue(context, value, header, filter2, isHeaderNameFilter) {
  if (utils$1.isFunction(filter2)) {
    return filter2.call(this, value, header);
  }
  if (isHeaderNameFilter) {
    value = header;
  }
  if (!utils$1.isString(value)) return;
  if (utils$1.isString(filter2)) {
    return value.indexOf(filter2) !== -1;
  }
  if (utils$1.isRegExp(filter2)) {
    return filter2.test(value);
  }
}
function formatHeader(header) {
  return header.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (w, char, str) => {
    return char.toUpperCase() + str;
  });
}
function buildAccessors(obj, header) {
  const accessorName = utils$1.toCamelCase(" " + header);
  ["get", "set", "has"].forEach((methodName) => {
    Object.defineProperty(obj, methodName + accessorName, {
      value: function(arg1, arg2, arg3) {
        return this[methodName].call(this, header, arg1, arg2, arg3);
      },
      configurable: true
    });
  });
}
let AxiosHeaders$1 = class AxiosHeaders {
  constructor(headers) {
    headers && this.set(headers);
  }
  set(header, valueOrRewrite, rewrite) {
    const self2 = this;
    function setHeader(_value, _header, _rewrite) {
      const lHeader = normalizeHeader(_header);
      if (!lHeader) {
        throw new Error("header name must be a non-empty string");
      }
      const key = utils$1.findKey(self2, lHeader);
      if (!key || self2[key] === void 0 || _rewrite === true || _rewrite === void 0 && self2[key] !== false) {
        self2[key || _header] = normalizeValue(_value);
      }
    }
    const setHeaders = (headers, _rewrite) => utils$1.forEach(headers, (_value, _header) => setHeader(_value, _header, _rewrite));
    if (utils$1.isPlainObject(header) || header instanceof this.constructor) {
      setHeaders(header, valueOrRewrite);
    } else if (utils$1.isString(header) && (header = header.trim()) && !isValidHeaderName(header)) {
      setHeaders(parseHeaders(header), valueOrRewrite);
    } else if (utils$1.isObject(header) && utils$1.isIterable(header)) {
      let obj = {}, dest, key;
      for (const entry of header) {
        if (!utils$1.isArray(entry)) {
          throw TypeError("Object iterator must return a key-value pair");
        }
        obj[key = entry[0]] = (dest = obj[key]) ? utils$1.isArray(dest) ? [...dest, entry[1]] : [dest, entry[1]] : entry[1];
      }
      setHeaders(obj, valueOrRewrite);
    } else {
      header != null && setHeader(valueOrRewrite, header, rewrite);
    }
    return this;
  }
  get(header, parser) {
    header = normalizeHeader(header);
    if (header) {
      const key = utils$1.findKey(this, header);
      if (key) {
        const value = this[key];
        if (!parser) {
          return value;
        }
        if (parser === true) {
          return parseTokens(value);
        }
        if (utils$1.isFunction(parser)) {
          return parser.call(this, value, key);
        }
        if (utils$1.isRegExp(parser)) {
          return parser.exec(value);
        }
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(header, matcher) {
    header = normalizeHeader(header);
    if (header) {
      const key = utils$1.findKey(this, header);
      return !!(key && this[key] !== void 0 && (!matcher || matchHeaderValue(this, this[key], key, matcher)));
    }
    return false;
  }
  delete(header, matcher) {
    const self2 = this;
    let deleted = false;
    function deleteHeader(_header) {
      _header = normalizeHeader(_header);
      if (_header) {
        const key = utils$1.findKey(self2, _header);
        if (key && (!matcher || matchHeaderValue(self2, self2[key], key, matcher))) {
          delete self2[key];
          deleted = true;
        }
      }
    }
    if (utils$1.isArray(header)) {
      header.forEach(deleteHeader);
    } else {
      deleteHeader(header);
    }
    return deleted;
  }
  clear(matcher) {
    const keys = Object.keys(this);
    let i = keys.length;
    let deleted = false;
    while (i--) {
      const key = keys[i];
      if (!matcher || matchHeaderValue(this, this[key], key, matcher, true)) {
        delete this[key];
        deleted = true;
      }
    }
    return deleted;
  }
  normalize(format) {
    const self2 = this;
    const headers = {};
    utils$1.forEach(this, (value, header) => {
      const key = utils$1.findKey(headers, header);
      if (key) {
        self2[key] = normalizeValue(value);
        delete self2[header];
        return;
      }
      const normalized = format ? formatHeader(header) : String(header).trim();
      if (normalized !== header) {
        delete self2[header];
      }
      self2[normalized] = normalizeValue(value);
      headers[normalized] = true;
    });
    return this;
  }
  concat(...targets) {
    return this.constructor.concat(this, ...targets);
  }
  toJSON(asStrings) {
    const obj = /* @__PURE__ */ Object.create(null);
    utils$1.forEach(this, (value, header) => {
      value != null && value !== false && (obj[header] = asStrings && utils$1.isArray(value) ? value.join(", ") : value);
    });
    return obj;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([header, value]) => header + ": " + value).join("\n");
  }
  getSetCookie() {
    return this.get("set-cookie") || [];
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(thing) {
    return thing instanceof this ? thing : new this(thing);
  }
  static concat(first, ...targets) {
    const computed = new this(first);
    targets.forEach((target) => computed.set(target));
    return computed;
  }
  static accessor(header) {
    const internals = this[$internals] = this[$internals] = {
      accessors: {}
    };
    const accessors = internals.accessors;
    const prototype2 = this.prototype;
    function defineAccessor(_header) {
      const lHeader = normalizeHeader(_header);
      if (!accessors[lHeader]) {
        buildAccessors(prototype2, _header);
        accessors[lHeader] = true;
      }
    }
    utils$1.isArray(header) ? header.forEach(defineAccessor) : defineAccessor(header);
    return this;
  }
};
AxiosHeaders$1.accessor([
  "Content-Type",
  "Content-Length",
  "Accept",
  "Accept-Encoding",
  "User-Agent",
  "Authorization"
]);
utils$1.reduceDescriptors(AxiosHeaders$1.prototype, ({ value }, key) => {
  let mapped = key[0].toUpperCase() + key.slice(1);
  return {
    get: () => value,
    set(headerValue) {
      this[mapped] = headerValue;
    }
  };
});
utils$1.freezeMethods(AxiosHeaders$1);
function transformData(fns, response) {
  const config = this || defaults;
  const context = response || config;
  const headers = AxiosHeaders$1.from(context.headers);
  let data = context.data;
  utils$1.forEach(fns, function transform(fn) {
    data = fn.call(config, data, headers.normalize(), response ? response.status : void 0);
  });
  headers.normalize();
  return data;
}
function isCancel$1(value) {
  return !!(value && value.__CANCEL__);
}
let CanceledError$1 = class CanceledError extends AxiosError$1 {
  /**
   * A `CanceledError` is an object that is thrown when an operation is canceled.
   *
   * @param {string=} message The message.
   * @param {Object=} config The config.
   * @param {Object=} request The request.
   *
   * @returns {CanceledError} The created error.
   */
  constructor(message, config, request) {
    super(message == null ? "canceled" : message, AxiosError$1.ERR_CANCELED, config, request);
    this.name = "CanceledError";
    this.__CANCEL__ = true;
  }
};
function settle(resolve, reject, response) {
  const validateStatus2 = response.config.validateStatus;
  if (!response.status || !validateStatus2 || validateStatus2(response.status)) {
    resolve(response);
  } else {
    reject(
      new AxiosError$1(
        "Request failed with status code " + response.status,
        [AxiosError$1.ERR_BAD_REQUEST, AxiosError$1.ERR_BAD_RESPONSE][Math.floor(response.status / 100) - 4],
        response.config,
        response.request,
        response
      )
    );
  }
}
function parseProtocol(url) {
  const match = /^([-+\w]{1,25})(:?\/\/|:)/.exec(url);
  return match && match[1] || "";
}
function speedometer(samplesCount, min) {
  samplesCount = samplesCount || 10;
  const bytes = new Array(samplesCount);
  const timestamps = new Array(samplesCount);
  let head = 0;
  let tail = 0;
  let firstSampleTS;
  min = min !== void 0 ? min : 1e3;
  return function push(chunkLength) {
    const now = Date.now();
    const startedAt = timestamps[tail];
    if (!firstSampleTS) {
      firstSampleTS = now;
    }
    bytes[head] = chunkLength;
    timestamps[head] = now;
    let i = tail;
    let bytesCount = 0;
    while (i !== head) {
      bytesCount += bytes[i++];
      i = i % samplesCount;
    }
    head = (head + 1) % samplesCount;
    if (head === tail) {
      tail = (tail + 1) % samplesCount;
    }
    if (now - firstSampleTS < min) {
      return;
    }
    const passed = startedAt && now - startedAt;
    return passed ? Math.round(bytesCount * 1e3 / passed) : void 0;
  };
}
function throttle(fn, freq) {
  let timestamp = 0;
  let threshold = 1e3 / freq;
  let lastArgs;
  let timer;
  const invoke = (args, now = Date.now()) => {
    timestamp = now;
    lastArgs = null;
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
    fn(...args);
  };
  const throttled = (...args) => {
    const now = Date.now();
    const passed = now - timestamp;
    if (passed >= threshold) {
      invoke(args, now);
    } else {
      lastArgs = args;
      if (!timer) {
        timer = setTimeout(() => {
          timer = null;
          invoke(lastArgs);
        }, threshold - passed);
      }
    }
  };
  const flush = () => lastArgs && invoke(lastArgs);
  return [throttled, flush];
}
const progressEventReducer = (listener, isDownloadStream, freq = 3) => {
  let bytesNotified = 0;
  const _speedometer = speedometer(50, 250);
  return throttle((e) => {
    const rawLoaded = e.loaded;
    const total = e.lengthComputable ? e.total : void 0;
    const loaded = total != null ? Math.min(rawLoaded, total) : rawLoaded;
    const progressBytes = Math.max(0, loaded - bytesNotified);
    const rate = _speedometer(progressBytes);
    bytesNotified = Math.max(bytesNotified, loaded);
    const data = {
      loaded,
      total,
      progress: total ? loaded / total : void 0,
      bytes: progressBytes,
      rate: rate ? rate : void 0,
      estimated: rate && total ? (total - loaded) / rate : void 0,
      event: e,
      lengthComputable: total != null,
      [isDownloadStream ? "download" : "upload"]: true
    };
    listener(data);
  }, freq);
};
const progressEventDecorator = (total, throttled) => {
  const lengthComputable = total != null;
  return [
    (loaded) => throttled[0]({
      lengthComputable,
      total,
      loaded
    }),
    throttled[1]
  ];
};
const asyncDecorator = (fn) => (...args) => utils$1.asap(() => fn(...args));
const isURLSameOrigin = platform.hasStandardBrowserEnv ? /* @__PURE__ */ ((origin2, isMSIE) => (url) => {
  url = new URL(url, platform.origin);
  return origin2.protocol === url.protocol && origin2.host === url.host && (isMSIE || origin2.port === url.port);
})(
  new URL(platform.origin),
  platform.navigator && /(msie|trident)/i.test(platform.navigator.userAgent)
) : () => true;
const cookies = platform.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(name, value, expires, path, domain, secure, sameSite) {
      if (typeof document === "undefined") return;
      const cookie = [`${name}=${encodeURIComponent(value)}`];
      if (utils$1.isNumber(expires)) {
        cookie.push(`expires=${new Date(expires).toUTCString()}`);
      }
      if (utils$1.isString(path)) {
        cookie.push(`path=${path}`);
      }
      if (utils$1.isString(domain)) {
        cookie.push(`domain=${domain}`);
      }
      if (secure === true) {
        cookie.push("secure");
      }
      if (utils$1.isString(sameSite)) {
        cookie.push(`SameSite=${sameSite}`);
      }
      document.cookie = cookie.join("; ");
    },
    read(name) {
      if (typeof document === "undefined") return null;
      const match = document.cookie.match(new RegExp("(?:^|; )" + name + "=([^;]*)"));
      return match ? decodeURIComponent(match[1]) : null;
    },
    remove(name) {
      this.write(name, "", Date.now() - 864e5, "/");
    }
  }
) : (
  // Non-standard browser env (web workers, react-native) lack needed support.
  {
    write() {
    },
    read() {
      return null;
    },
    remove() {
    }
  }
);
function isAbsoluteURL(url) {
  if (typeof url !== "string") {
    return false;
  }
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(url);
}
function combineURLs(baseURL, relativeURL) {
  return relativeURL ? baseURL.replace(/\/?\/$/, "") + "/" + relativeURL.replace(/^\/+/, "") : baseURL;
}
function buildFullPath(baseURL, requestedURL, allowAbsoluteUrls) {
  let isRelativeUrl = !isAbsoluteURL(requestedURL);
  if (baseURL && (isRelativeUrl || allowAbsoluteUrls === false)) {
    return combineURLs(baseURL, requestedURL);
  }
  return requestedURL;
}
const headersToObject = (thing) => thing instanceof AxiosHeaders$1 ? { ...thing } : thing;
function mergeConfig$1(config1, config2) {
  config2 = config2 || {};
  const config = {};
  function getMergedValue(target, source, prop, caseless) {
    if (utils$1.isPlainObject(target) && utils$1.isPlainObject(source)) {
      return utils$1.merge.call({ caseless }, target, source);
    } else if (utils$1.isPlainObject(source)) {
      return utils$1.merge({}, source);
    } else if (utils$1.isArray(source)) {
      return source.slice();
    }
    return source;
  }
  function mergeDeepProperties(a, b, prop, caseless) {
    if (!utils$1.isUndefined(b)) {
      return getMergedValue(a, b, prop, caseless);
    } else if (!utils$1.isUndefined(a)) {
      return getMergedValue(void 0, a, prop, caseless);
    }
  }
  function valueFromConfig2(a, b) {
    if (!utils$1.isUndefined(b)) {
      return getMergedValue(void 0, b);
    }
  }
  function defaultToConfig2(a, b) {
    if (!utils$1.isUndefined(b)) {
      return getMergedValue(void 0, b);
    } else if (!utils$1.isUndefined(a)) {
      return getMergedValue(void 0, a);
    }
  }
  function mergeDirectKeys(a, b, prop) {
    if (utils$1.hasOwnProp(config2, prop)) {
      return getMergedValue(a, b);
    } else if (utils$1.hasOwnProp(config1, prop)) {
      return getMergedValue(void 0, a);
    }
  }
  const mergeMap = {
    url: valueFromConfig2,
    method: valueFromConfig2,
    data: valueFromConfig2,
    baseURL: defaultToConfig2,
    transformRequest: defaultToConfig2,
    transformResponse: defaultToConfig2,
    paramsSerializer: defaultToConfig2,
    timeout: defaultToConfig2,
    timeoutMessage: defaultToConfig2,
    withCredentials: defaultToConfig2,
    withXSRFToken: defaultToConfig2,
    adapter: defaultToConfig2,
    responseType: defaultToConfig2,
    xsrfCookieName: defaultToConfig2,
    xsrfHeaderName: defaultToConfig2,
    onUploadProgress: defaultToConfig2,
    onDownloadProgress: defaultToConfig2,
    decompress: defaultToConfig2,
    maxContentLength: defaultToConfig2,
    maxBodyLength: defaultToConfig2,
    beforeRedirect: defaultToConfig2,
    transport: defaultToConfig2,
    httpAgent: defaultToConfig2,
    httpsAgent: defaultToConfig2,
    cancelToken: defaultToConfig2,
    socketPath: defaultToConfig2,
    responseEncoding: defaultToConfig2,
    validateStatus: mergeDirectKeys,
    headers: (a, b, prop) => mergeDeepProperties(headersToObject(a), headersToObject(b), prop, true)
  };
  utils$1.forEach(Object.keys({ ...config1, ...config2 }), function computeConfigValue(prop) {
    if (prop === "__proto__" || prop === "constructor" || prop === "prototype") return;
    const merge2 = utils$1.hasOwnProp(mergeMap, prop) ? mergeMap[prop] : mergeDeepProperties;
    const a = utils$1.hasOwnProp(config1, prop) ? config1[prop] : void 0;
    const b = utils$1.hasOwnProp(config2, prop) ? config2[prop] : void 0;
    const configValue = merge2(a, b, prop);
    utils$1.isUndefined(configValue) && merge2 !== mergeDirectKeys || (config[prop] = configValue);
  });
  return config;
}
const resolveConfig = (config) => {
  const newConfig = mergeConfig$1({}, config);
  let { data, withXSRFToken, xsrfHeaderName, xsrfCookieName, headers, auth } = newConfig;
  newConfig.headers = headers = AxiosHeaders$1.from(headers);
  newConfig.url = buildURL(
    buildFullPath(newConfig.baseURL, newConfig.url, newConfig.allowAbsoluteUrls),
    config.params,
    config.paramsSerializer
  );
  if (auth) {
    headers.set(
      "Authorization",
      "Basic " + btoa(
        (auth.username || "") + ":" + (auth.password ? unescape(encodeURIComponent(auth.password)) : "")
      )
    );
  }
  if (utils$1.isFormData(data)) {
    if (platform.hasStandardBrowserEnv || platform.hasStandardBrowserWebWorkerEnv) {
      headers.setContentType(void 0);
    } else if (utils$1.isFunction(data.getHeaders)) {
      const formHeaders = data.getHeaders();
      const allowedHeaders = ["content-type", "content-length"];
      Object.entries(formHeaders).forEach(([key, val]) => {
        if (allowedHeaders.includes(key.toLowerCase())) {
          headers.set(key, val);
        }
      });
    }
  }
  if (platform.hasStandardBrowserEnv) {
    if (utils$1.isFunction(withXSRFToken)) {
      withXSRFToken = withXSRFToken(newConfig);
    }
    const shouldSendXSRF = withXSRFToken === true || withXSRFToken == null && isURLSameOrigin(newConfig.url);
    if (shouldSendXSRF) {
      const xsrfValue = xsrfHeaderName && xsrfCookieName && cookies.read(xsrfCookieName);
      if (xsrfValue) {
        headers.set(xsrfHeaderName, xsrfValue);
      }
    }
  }
  return newConfig;
};
const isXHRAdapterSupported = typeof XMLHttpRequest !== "undefined";
const xhrAdapter = isXHRAdapterSupported && function(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    const _config = resolveConfig(config);
    let requestData = _config.data;
    const requestHeaders = AxiosHeaders$1.from(_config.headers).normalize();
    let { responseType, onUploadProgress, onDownloadProgress } = _config;
    let onCanceled;
    let uploadThrottled, downloadThrottled;
    let flushUpload, flushDownload;
    function done() {
      flushUpload && flushUpload();
      flushDownload && flushDownload();
      _config.cancelToken && _config.cancelToken.unsubscribe(onCanceled);
      _config.signal && _config.signal.removeEventListener("abort", onCanceled);
    }
    let request = new XMLHttpRequest();
    request.open(_config.method.toUpperCase(), _config.url, true);
    request.timeout = _config.timeout;
    function onloadend() {
      if (!request) {
        return;
      }
      const responseHeaders = AxiosHeaders$1.from(
        "getAllResponseHeaders" in request && request.getAllResponseHeaders()
      );
      const responseData = !responseType || responseType === "text" || responseType === "json" ? request.responseText : request.response;
      const response = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config,
        request
      };
      settle(
        function _resolve(value) {
          resolve(value);
          done();
        },
        function _reject(err) {
          reject(err);
          done();
        },
        response
      );
      request = null;
    }
    if ("onloadend" in request) {
      request.onloadend = onloadend;
    } else {
      request.onreadystatechange = function handleLoad() {
        if (!request || request.readyState !== 4) {
          return;
        }
        if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf("file:") === 0)) {
          return;
        }
        setTimeout(onloadend);
      };
    }
    request.onabort = function handleAbort() {
      if (!request) {
        return;
      }
      reject(new AxiosError$1("Request aborted", AxiosError$1.ECONNABORTED, config, request));
      request = null;
    };
    request.onerror = function handleError(event) {
      const msg = event && event.message ? event.message : "Network Error";
      const err = new AxiosError$1(msg, AxiosError$1.ERR_NETWORK, config, request);
      err.event = event || null;
      reject(err);
      request = null;
    };
    request.ontimeout = function handleTimeout() {
      let timeoutErrorMessage = _config.timeout ? "timeout of " + _config.timeout + "ms exceeded" : "timeout exceeded";
      const transitional2 = _config.transitional || transitionalDefaults;
      if (_config.timeoutErrorMessage) {
        timeoutErrorMessage = _config.timeoutErrorMessage;
      }
      reject(
        new AxiosError$1(
          timeoutErrorMessage,
          transitional2.clarifyTimeoutError ? AxiosError$1.ETIMEDOUT : AxiosError$1.ECONNABORTED,
          config,
          request
        )
      );
      request = null;
    };
    requestData === void 0 && requestHeaders.setContentType(null);
    if ("setRequestHeader" in request) {
      utils$1.forEach(requestHeaders.toJSON(), function setRequestHeader(val, key) {
        request.setRequestHeader(key, val);
      });
    }
    if (!utils$1.isUndefined(_config.withCredentials)) {
      request.withCredentials = !!_config.withCredentials;
    }
    if (responseType && responseType !== "json") {
      request.responseType = _config.responseType;
    }
    if (onDownloadProgress) {
      [downloadThrottled, flushDownload] = progressEventReducer(onDownloadProgress, true);
      request.addEventListener("progress", downloadThrottled);
    }
    if (onUploadProgress && request.upload) {
      [uploadThrottled, flushUpload] = progressEventReducer(onUploadProgress);
      request.upload.addEventListener("progress", uploadThrottled);
      request.upload.addEventListener("loadend", flushUpload);
    }
    if (_config.cancelToken || _config.signal) {
      onCanceled = (cancel) => {
        if (!request) {
          return;
        }
        reject(!cancel || cancel.type ? new CanceledError$1(null, config, request) : cancel);
        request.abort();
        request = null;
      };
      _config.cancelToken && _config.cancelToken.subscribe(onCanceled);
      if (_config.signal) {
        _config.signal.aborted ? onCanceled() : _config.signal.addEventListener("abort", onCanceled);
      }
    }
    const protocol = parseProtocol(_config.url);
    if (protocol && platform.protocols.indexOf(protocol) === -1) {
      reject(
        new AxiosError$1(
          "Unsupported protocol " + protocol + ":",
          AxiosError$1.ERR_BAD_REQUEST,
          config
        )
      );
      return;
    }
    request.send(requestData || null);
  });
};
const composeSignals = (signals, timeout) => {
  const { length } = signals = signals ? signals.filter(Boolean) : [];
  if (timeout || length) {
    let controller = new AbortController();
    let aborted;
    const onabort = function(reason) {
      if (!aborted) {
        aborted = true;
        unsubscribe();
        const err = reason instanceof Error ? reason : this.reason;
        controller.abort(
          err instanceof AxiosError$1 ? err : new CanceledError$1(err instanceof Error ? err.message : err)
        );
      }
    };
    let timer = timeout && setTimeout(() => {
      timer = null;
      onabort(new AxiosError$1(`timeout of ${timeout}ms exceeded`, AxiosError$1.ETIMEDOUT));
    }, timeout);
    const unsubscribe = () => {
      if (signals) {
        timer && clearTimeout(timer);
        timer = null;
        signals.forEach((signal2) => {
          signal2.unsubscribe ? signal2.unsubscribe(onabort) : signal2.removeEventListener("abort", onabort);
        });
        signals = null;
      }
    };
    signals.forEach((signal2) => signal2.addEventListener("abort", onabort));
    const { signal } = controller;
    signal.unsubscribe = () => utils$1.asap(unsubscribe);
    return signal;
  }
};
const streamChunk = function* (chunk, chunkSize) {
  let len = chunk.byteLength;
  if (len < chunkSize) {
    yield chunk;
    return;
  }
  let pos = 0;
  let end;
  while (pos < len) {
    end = pos + chunkSize;
    yield chunk.slice(pos, end);
    pos = end;
  }
};
const readBytes = async function* (iterable, chunkSize) {
  for await (const chunk of readStream(iterable)) {
    yield* streamChunk(chunk, chunkSize);
  }
};
const readStream = async function* (stream) {
  if (stream[Symbol.asyncIterator]) {
    yield* stream;
    return;
  }
  const reader = stream.getReader();
  try {
    for (; ; ) {
      const { done, value } = await reader.read();
      if (done) {
        break;
      }
      yield value;
    }
  } finally {
    await reader.cancel();
  }
};
const trackStream = (stream, chunkSize, onProgress, onFinish) => {
  const iterator2 = readBytes(stream, chunkSize);
  let bytes = 0;
  let done;
  let _onFinish = (e) => {
    if (!done) {
      done = true;
      onFinish && onFinish(e);
    }
  };
  return new ReadableStream(
    {
      async pull(controller) {
        try {
          const { done: done2, value } = await iterator2.next();
          if (done2) {
            _onFinish();
            controller.close();
            return;
          }
          let len = value.byteLength;
          if (onProgress) {
            let loadedBytes = bytes += len;
            onProgress(loadedBytes);
          }
          controller.enqueue(new Uint8Array(value));
        } catch (err) {
          _onFinish(err);
          throw err;
        }
      },
      cancel(reason) {
        _onFinish(reason);
        return iterator2.return();
      }
    },
    {
      highWaterMark: 2
    }
  );
};
const DEFAULT_CHUNK_SIZE = 64 * 1024;
const { isFunction } = utils$1;
const globalFetchAPI = (({ Request, Response }) => ({
  Request,
  Response
}))(utils$1.global);
const { ReadableStream: ReadableStream$1, TextEncoder } = utils$1.global;
const test = (fn, ...args) => {
  try {
    return !!fn(...args);
  } catch (e) {
    return false;
  }
};
const factory = (env) => {
  env = utils$1.merge.call(
    {
      skipUndefined: true
    },
    globalFetchAPI,
    env
  );
  const { fetch: envFetch, Request, Response } = env;
  const isFetchSupported = envFetch ? isFunction(envFetch) : typeof fetch === "function";
  const isRequestSupported = isFunction(Request);
  const isResponseSupported = isFunction(Response);
  if (!isFetchSupported) {
    return false;
  }
  const isReadableStreamSupported = isFetchSupported && isFunction(ReadableStream$1);
  const encodeText = isFetchSupported && (typeof TextEncoder === "function" ? /* @__PURE__ */ ((encoder) => (str) => encoder.encode(str))(new TextEncoder()) : async (str) => new Uint8Array(await new Request(str).arrayBuffer()));
  const supportsRequestStream = isRequestSupported && isReadableStreamSupported && test(() => {
    let duplexAccessed = false;
    const request = new Request(platform.origin, {
      body: new ReadableStream$1(),
      method: "POST",
      get duplex() {
        duplexAccessed = true;
        return "half";
      }
    });
    const hasContentType = request.headers.has("Content-Type");
    if (request.body != null) {
      request.body.cancel();
    }
    return duplexAccessed && !hasContentType;
  });
  const supportsResponseStream = isResponseSupported && isReadableStreamSupported && test(() => utils$1.isReadableStream(new Response("").body));
  const resolvers = {
    stream: supportsResponseStream && ((res) => res.body)
  };
  isFetchSupported && (() => {
    ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((type) => {
      !resolvers[type] && (resolvers[type] = (res, config) => {
        let method = res && res[type];
        if (method) {
          return method.call(res);
        }
        throw new AxiosError$1(
          `Response type '${type}' is not supported`,
          AxiosError$1.ERR_NOT_SUPPORT,
          config
        );
      });
    });
  })();
  const getBodyLength = async (body) => {
    if (body == null) {
      return 0;
    }
    if (utils$1.isBlob(body)) {
      return body.size;
    }
    if (utils$1.isSpecCompliantForm(body)) {
      const _request = new Request(platform.origin, {
        method: "POST",
        body
      });
      return (await _request.arrayBuffer()).byteLength;
    }
    if (utils$1.isArrayBufferView(body) || utils$1.isArrayBuffer(body)) {
      return body.byteLength;
    }
    if (utils$1.isURLSearchParams(body)) {
      body = body + "";
    }
    if (utils$1.isString(body)) {
      return (await encodeText(body)).byteLength;
    }
  };
  const resolveBodyLength = async (headers, body) => {
    const length = utils$1.toFiniteNumber(headers.getContentLength());
    return length == null ? getBodyLength(body) : length;
  };
  return async (config) => {
    let {
      url,
      method,
      data,
      signal,
      cancelToken,
      timeout,
      onDownloadProgress,
      onUploadProgress,
      responseType,
      headers,
      withCredentials = "same-origin",
      fetchOptions
    } = resolveConfig(config);
    let _fetch = envFetch || fetch;
    responseType = responseType ? (responseType + "").toLowerCase() : "text";
    let composedSignal = composeSignals(
      [signal, cancelToken && cancelToken.toAbortSignal()],
      timeout
    );
    let request = null;
    const unsubscribe = composedSignal && composedSignal.unsubscribe && (() => {
      composedSignal.unsubscribe();
    });
    let requestContentLength;
    try {
      if (onUploadProgress && supportsRequestStream && method !== "get" && method !== "head" && (requestContentLength = await resolveBodyLength(headers, data)) !== 0) {
        let _request = new Request(url, {
          method: "POST",
          body: data,
          duplex: "half"
        });
        let contentTypeHeader;
        if (utils$1.isFormData(data) && (contentTypeHeader = _request.headers.get("content-type"))) {
          headers.setContentType(contentTypeHeader);
        }
        if (_request.body) {
          const [onProgress, flush] = progressEventDecorator(
            requestContentLength,
            progressEventReducer(asyncDecorator(onUploadProgress))
          );
          data = trackStream(_request.body, DEFAULT_CHUNK_SIZE, onProgress, flush);
        }
      }
      if (!utils$1.isString(withCredentials)) {
        withCredentials = withCredentials ? "include" : "omit";
      }
      const isCredentialsSupported = isRequestSupported && "credentials" in Request.prototype;
      if (utils$1.isFormData(data)) {
        const contentType = headers.getContentType();
        if (contentType && /^multipart\/form-data/i.test(contentType) && !/boundary=/i.test(contentType)) {
          headers.delete("content-type");
        }
      }
      const resolvedOptions = {
        ...fetchOptions,
        signal: composedSignal,
        method: method.toUpperCase(),
        headers: headers.normalize().toJSON(),
        body: data,
        duplex: "half",
        credentials: isCredentialsSupported ? withCredentials : void 0
      };
      request = isRequestSupported && new Request(url, resolvedOptions);
      let response = await (isRequestSupported ? _fetch(request, fetchOptions) : _fetch(url, resolvedOptions));
      const isStreamResponse = supportsResponseStream && (responseType === "stream" || responseType === "response");
      if (supportsResponseStream && (onDownloadProgress || isStreamResponse && unsubscribe)) {
        const options = {};
        ["status", "statusText", "headers"].forEach((prop) => {
          options[prop] = response[prop];
        });
        const responseContentLength = utils$1.toFiniteNumber(response.headers.get("content-length"));
        const [onProgress, flush] = onDownloadProgress && progressEventDecorator(
          responseContentLength,
          progressEventReducer(asyncDecorator(onDownloadProgress), true)
        ) || [];
        response = new Response(
          trackStream(response.body, DEFAULT_CHUNK_SIZE, onProgress, () => {
            flush && flush();
            unsubscribe && unsubscribe();
          }),
          options
        );
      }
      responseType = responseType || "text";
      let responseData = await resolvers[utils$1.findKey(resolvers, responseType) || "text"](
        response,
        config
      );
      !isStreamResponse && unsubscribe && unsubscribe();
      return await new Promise((resolve, reject) => {
        settle(resolve, reject, {
          data: responseData,
          headers: AxiosHeaders$1.from(response.headers),
          status: response.status,
          statusText: response.statusText,
          config,
          request
        });
      });
    } catch (err) {
      unsubscribe && unsubscribe();
      if (err && err.name === "TypeError" && /Load failed|fetch/i.test(err.message)) {
        throw Object.assign(
          new AxiosError$1(
            "Network Error",
            AxiosError$1.ERR_NETWORK,
            config,
            request,
            err && err.response
          ),
          {
            cause: err.cause || err
          }
        );
      }
      throw AxiosError$1.from(err, err && err.code, config, request, err && err.response);
    }
  };
};
const seedCache = /* @__PURE__ */ new Map();
const getFetch = (config) => {
  let env = config && config.env || {};
  const { fetch: fetch2, Request, Response } = env;
  const seeds = [Request, Response, fetch2];
  let len = seeds.length, i = len, seed, target, map = seedCache;
  while (i--) {
    seed = seeds[i];
    target = map.get(seed);
    target === void 0 && map.set(seed, target = i ? /* @__PURE__ */ new Map() : factory(env));
    map = target;
  }
  return target;
};
getFetch();
const knownAdapters = {
  http: httpAdapter,
  xhr: xhrAdapter,
  fetch: {
    get: getFetch
  }
};
utils$1.forEach(knownAdapters, (fn, value) => {
  if (fn) {
    try {
      Object.defineProperty(fn, "name", { value });
    } catch (e) {
    }
    Object.defineProperty(fn, "adapterName", { value });
  }
});
const renderReason = (reason) => `- ${reason}`;
const isResolvedHandle = (adapter) => utils$1.isFunction(adapter) || adapter === null || adapter === false;
function getAdapter$1(adapters2, config) {
  adapters2 = utils$1.isArray(adapters2) ? adapters2 : [adapters2];
  const { length } = adapters2;
  let nameOrAdapter;
  let adapter;
  const rejectedReasons = {};
  for (let i = 0; i < length; i++) {
    nameOrAdapter = adapters2[i];
    let id;
    adapter = nameOrAdapter;
    if (!isResolvedHandle(nameOrAdapter)) {
      adapter = knownAdapters[(id = String(nameOrAdapter)).toLowerCase()];
      if (adapter === void 0) {
        throw new AxiosError$1(`Unknown adapter '${id}'`);
      }
    }
    if (adapter && (utils$1.isFunction(adapter) || (adapter = adapter.get(config)))) {
      break;
    }
    rejectedReasons[id || "#" + i] = adapter;
  }
  if (!adapter) {
    const reasons = Object.entries(rejectedReasons).map(
      ([id, state]) => `adapter ${id} ` + (state === false ? "is not supported by the environment" : "is not available in the build")
    );
    let s = length ? reasons.length > 1 ? "since :\n" + reasons.map(renderReason).join("\n") : " " + renderReason(reasons[0]) : "as no adapter specified";
    throw new AxiosError$1(
      `There is no suitable adapter to dispatch the request ` + s,
      "ERR_NOT_SUPPORT"
    );
  }
  return adapter;
}
const adapters = {
  /**
   * Resolve an adapter from a list of adapter names or functions.
   * @type {Function}
   */
  getAdapter: getAdapter$1,
  /**
   * Exposes all known adapters
   * @type {Object<string, Function|Object>}
   */
  adapters: knownAdapters
};
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
  if (config.signal && config.signal.aborted) {
    throw new CanceledError$1(null, config);
  }
}
function dispatchRequest(config) {
  throwIfCancellationRequested(config);
  config.headers = AxiosHeaders$1.from(config.headers);
  config.data = transformData.call(config, config.transformRequest);
  if (["post", "put", "patch"].indexOf(config.method) !== -1) {
    config.headers.setContentType("application/x-www-form-urlencoded", false);
  }
  const adapter = adapters.getAdapter(config.adapter || defaults.adapter, config);
  return adapter(config).then(
    function onAdapterResolution(response) {
      throwIfCancellationRequested(config);
      response.data = transformData.call(config, config.transformResponse, response);
      response.headers = AxiosHeaders$1.from(response.headers);
      return response;
    },
    function onAdapterRejection(reason) {
      if (!isCancel$1(reason)) {
        throwIfCancellationRequested(config);
        if (reason && reason.response) {
          reason.response.data = transformData.call(
            config,
            config.transformResponse,
            reason.response
          );
          reason.response.headers = AxiosHeaders$1.from(reason.response.headers);
        }
      }
      return Promise.reject(reason);
    }
  );
}
const VERSION$1 = "1.15.1";
const validators$1 = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((type, i) => {
  validators$1[type] = function validator2(thing) {
    return typeof thing === type || "a" + (i < 1 ? "n " : " ") + type;
  };
});
const deprecatedWarnings = {};
validators$1.transitional = function transitional(validator2, version, message) {
  function formatMessage(opt, desc) {
    return "[Axios v" + VERSION$1 + "] Transitional option '" + opt + "'" + desc + (message ? ". " + message : "");
  }
  return (value, opt, opts) => {
    if (validator2 === false) {
      throw new AxiosError$1(
        formatMessage(opt, " has been removed" + (version ? " in " + version : "")),
        AxiosError$1.ERR_DEPRECATED
      );
    }
    if (version && !deprecatedWarnings[opt]) {
      deprecatedWarnings[opt] = true;
      console.warn(
        formatMessage(
          opt,
          " has been deprecated since v" + version + " and will be removed in the near future"
        )
      );
    }
    return validator2 ? validator2(value, opt, opts) : true;
  };
};
validators$1.spelling = function spelling(correctSpelling) {
  return (value, opt) => {
    console.warn(`${opt} is likely a misspelling of ${correctSpelling}`);
    return true;
  };
};
function assertOptions(options, schema, allowUnknown) {
  if (typeof options !== "object") {
    throw new AxiosError$1("options must be an object", AxiosError$1.ERR_BAD_OPTION_VALUE);
  }
  const keys = Object.keys(options);
  let i = keys.length;
  while (i-- > 0) {
    const opt = keys[i];
    const validator2 = schema[opt];
    if (validator2) {
      const value = options[opt];
      const result = value === void 0 || validator2(value, opt, options);
      if (result !== true) {
        throw new AxiosError$1(
          "option " + opt + " must be " + result,
          AxiosError$1.ERR_BAD_OPTION_VALUE
        );
      }
      continue;
    }
    if (allowUnknown !== true) {
      throw new AxiosError$1("Unknown option " + opt, AxiosError$1.ERR_BAD_OPTION);
    }
  }
}
const validator = {
  assertOptions,
  validators: validators$1
};
const validators = validator.validators;
let Axios$1 = class Axios {
  constructor(instanceConfig) {
    this.defaults = instanceConfig || {};
    this.interceptors = {
      request: new InterceptorManager(),
      response: new InterceptorManager()
    };
  }
  /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  async request(configOrUrl, config) {
    try {
      return await this._request(configOrUrl, config);
    } catch (err) {
      if (err instanceof Error) {
        let dummy = {};
        Error.captureStackTrace ? Error.captureStackTrace(dummy) : dummy = new Error();
        const stack = (() => {
          if (!dummy.stack) {
            return "";
          }
          const firstNewlineIndex = dummy.stack.indexOf("\n");
          return firstNewlineIndex === -1 ? "" : dummy.stack.slice(firstNewlineIndex + 1);
        })();
        try {
          if (!err.stack) {
            err.stack = stack;
          } else if (stack) {
            const firstNewlineIndex = stack.indexOf("\n");
            const secondNewlineIndex = firstNewlineIndex === -1 ? -1 : stack.indexOf("\n", firstNewlineIndex + 1);
            const stackWithoutTwoTopLines = secondNewlineIndex === -1 ? "" : stack.slice(secondNewlineIndex + 1);
            if (!String(err.stack).endsWith(stackWithoutTwoTopLines)) {
              err.stack += "\n" + stack;
            }
          }
        } catch (e) {
        }
      }
      throw err;
    }
  }
  _request(configOrUrl, config) {
    if (typeof configOrUrl === "string") {
      config = config || {};
      config.url = configOrUrl;
    } else {
      config = configOrUrl || {};
    }
    config = mergeConfig$1(this.defaults, config);
    const { transitional: transitional2, paramsSerializer, headers } = config;
    if (transitional2 !== void 0) {
      validator.assertOptions(
        transitional2,
        {
          silentJSONParsing: validators.transitional(validators.boolean),
          forcedJSONParsing: validators.transitional(validators.boolean),
          clarifyTimeoutError: validators.transitional(validators.boolean),
          legacyInterceptorReqResOrdering: validators.transitional(validators.boolean)
        },
        false
      );
    }
    if (paramsSerializer != null) {
      if (utils$1.isFunction(paramsSerializer)) {
        config.paramsSerializer = {
          serialize: paramsSerializer
        };
      } else {
        validator.assertOptions(
          paramsSerializer,
          {
            encode: validators.function,
            serialize: validators.function
          },
          true
        );
      }
    }
    if (config.allowAbsoluteUrls !== void 0) ;
    else if (this.defaults.allowAbsoluteUrls !== void 0) {
      config.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls;
    } else {
      config.allowAbsoluteUrls = true;
    }
    validator.assertOptions(
      config,
      {
        baseUrl: validators.spelling("baseURL"),
        withXsrfToken: validators.spelling("withXSRFToken")
      },
      true
    );
    config.method = (config.method || this.defaults.method || "get").toLowerCase();
    let contextHeaders = headers && utils$1.merge(headers.common, headers[config.method]);
    headers && utils$1.forEach(["delete", "get", "head", "post", "put", "patch", "common"], (method) => {
      delete headers[method];
    });
    config.headers = AxiosHeaders$1.concat(contextHeaders, headers);
    const requestInterceptorChain = [];
    let synchronousRequestInterceptors = true;
    this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
      if (typeof interceptor.runWhen === "function" && interceptor.runWhen(config) === false) {
        return;
      }
      synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;
      const transitional3 = config.transitional || transitionalDefaults;
      const legacyInterceptorReqResOrdering = transitional3 && transitional3.legacyInterceptorReqResOrdering;
      if (legacyInterceptorReqResOrdering) {
        requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
      } else {
        requestInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
      }
    });
    const responseInterceptorChain = [];
    this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
      responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
    });
    let promise;
    let i = 0;
    let len;
    if (!synchronousRequestInterceptors) {
      const chain = [dispatchRequest.bind(this), void 0];
      chain.unshift(...requestInterceptorChain);
      chain.push(...responseInterceptorChain);
      len = chain.length;
      promise = Promise.resolve(config);
      while (i < len) {
        promise = promise.then(chain[i++], chain[i++]);
      }
      return promise;
    }
    len = requestInterceptorChain.length;
    let newConfig = config;
    while (i < len) {
      const onFulfilled = requestInterceptorChain[i++];
      const onRejected = requestInterceptorChain[i++];
      try {
        newConfig = onFulfilled(newConfig);
      } catch (error) {
        onRejected.call(this, error);
        break;
      }
    }
    try {
      promise = dispatchRequest.call(this, newConfig);
    } catch (error) {
      return Promise.reject(error);
    }
    i = 0;
    len = responseInterceptorChain.length;
    while (i < len) {
      promise = promise.then(responseInterceptorChain[i++], responseInterceptorChain[i++]);
    }
    return promise;
  }
  getUri(config) {
    config = mergeConfig$1(this.defaults, config);
    const fullPath = buildFullPath(config.baseURL, config.url, config.allowAbsoluteUrls);
    return buildURL(fullPath, config.params, config.paramsSerializer);
  }
};
utils$1.forEach(["delete", "get", "head", "options"], function forEachMethodNoData(method) {
  Axios$1.prototype[method] = function(url, config) {
    return this.request(
      mergeConfig$1(config || {}, {
        method,
        url,
        data: (config || {}).data
      })
    );
  };
});
utils$1.forEach(["post", "put", "patch"], function forEachMethodWithData(method) {
  function generateHTTPMethod(isForm) {
    return function httpMethod(url, data, config) {
      return this.request(
        mergeConfig$1(config || {}, {
          method,
          headers: isForm ? {
            "Content-Type": "multipart/form-data"
          } : {},
          url,
          data
        })
      );
    };
  }
  Axios$1.prototype[method] = generateHTTPMethod();
  Axios$1.prototype[method + "Form"] = generateHTTPMethod(true);
});
let CancelToken$1 = class CancelToken {
  constructor(executor) {
    if (typeof executor !== "function") {
      throw new TypeError("executor must be a function.");
    }
    let resolvePromise;
    this.promise = new Promise(function promiseExecutor(resolve) {
      resolvePromise = resolve;
    });
    const token = this;
    this.promise.then((cancel) => {
      if (!token._listeners) return;
      let i = token._listeners.length;
      while (i-- > 0) {
        token._listeners[i](cancel);
      }
      token._listeners = null;
    });
    this.promise.then = (onfulfilled) => {
      let _resolve;
      const promise = new Promise((resolve) => {
        token.subscribe(resolve);
        _resolve = resolve;
      }).then(onfulfilled);
      promise.cancel = function reject() {
        token.unsubscribe(_resolve);
      };
      return promise;
    };
    executor(function cancel(message, config, request) {
      if (token.reason) {
        return;
      }
      token.reason = new CanceledError$1(message, config, request);
      resolvePromise(token.reason);
    });
  }
  /**
   * Throws a `CanceledError` if cancellation has been requested.
   */
  throwIfRequested() {
    if (this.reason) {
      throw this.reason;
    }
  }
  /**
   * Subscribe to the cancel signal
   */
  subscribe(listener) {
    if (this.reason) {
      listener(this.reason);
      return;
    }
    if (this._listeners) {
      this._listeners.push(listener);
    } else {
      this._listeners = [listener];
    }
  }
  /**
   * Unsubscribe from the cancel signal
   */
  unsubscribe(listener) {
    if (!this._listeners) {
      return;
    }
    const index = this._listeners.indexOf(listener);
    if (index !== -1) {
      this._listeners.splice(index, 1);
    }
  }
  toAbortSignal() {
    const controller = new AbortController();
    const abort = (err) => {
      controller.abort(err);
    };
    this.subscribe(abort);
    controller.signal.unsubscribe = () => this.unsubscribe(abort);
    return controller.signal;
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let cancel;
    const token = new CancelToken(function executor(c) {
      cancel = c;
    });
    return {
      token,
      cancel
    };
  }
};
function spread$1(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
}
function isAxiosError$1(payload) {
  return utils$1.isObject(payload) && payload.isAxiosError === true;
}
const HttpStatusCode$1 = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
  WebServerIsDown: 521,
  ConnectionTimedOut: 522,
  OriginIsUnreachable: 523,
  TimeoutOccurred: 524,
  SslHandshakeFailed: 525,
  InvalidSslCertificate: 526
};
Object.entries(HttpStatusCode$1).forEach(([key, value]) => {
  HttpStatusCode$1[value] = key;
});
function createInstance(defaultConfig) {
  const context = new Axios$1(defaultConfig);
  const instance2 = bind(Axios$1.prototype.request, context);
  utils$1.extend(instance2, Axios$1.prototype, context, { allOwnKeys: true });
  utils$1.extend(instance2, context, null, { allOwnKeys: true });
  instance2.create = function create2(instanceConfig) {
    return createInstance(mergeConfig$1(defaultConfig, instanceConfig));
  };
  return instance2;
}
const axios = createInstance(defaults);
axios.Axios = Axios$1;
axios.CanceledError = CanceledError$1;
axios.CancelToken = CancelToken$1;
axios.isCancel = isCancel$1;
axios.VERSION = VERSION$1;
axios.toFormData = toFormData$1;
axios.AxiosError = AxiosError$1;
axios.Cancel = axios.CanceledError;
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = spread$1;
axios.isAxiosError = isAxiosError$1;
axios.mergeConfig = mergeConfig$1;
axios.AxiosHeaders = AxiosHeaders$1;
axios.formToJSON = (thing) => formDataToJSON(utils$1.isHTMLForm(thing) ? new FormData(thing) : thing);
axios.getAdapter = adapters.getAdapter;
axios.HttpStatusCode = HttpStatusCode$1;
axios.default = axios;
const {
  Axios: Axios2,
  AxiosError: AxiosError2,
  CanceledError: CanceledError2,
  isCancel,
  CancelToken: CancelToken2,
  VERSION,
  all: all2,
  Cancel,
  isAxiosError,
  spread,
  toFormData,
  AxiosHeaders: AxiosHeaders2,
  HttpStatusCode,
  formToJSON,
  getAdapter,
  mergeConfig
} = axios;
const API_BASE = "/api";
const api = axios.create({
  baseURL: API_BASE,
  headers: {
    "Content-Type": "application/json"
  },
  timeout: 15e3
});
api.interceptors.request.use(
  (config) => {
    const token = useAuthStore.getState().token;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    if (config.data instanceof FormData) {
      delete config.headers["Content-Type"];
    }
    return config;
  },
  (error) => Promise.reject(error)
);
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    var _a2, _b2, _c2;
    const originalRequest = error.config;
    const skipAuthLogout = ((_a2 = originalRequest == null ? void 0 : originalRequest.headers) == null ? void 0 : _a2["x-skip-auth-logout"]) === "true";
    if (((_b2 = error.response) == null ? void 0 : _b2.status) === 401 && skipAuthLogout) {
      return Promise.reject(error);
    }
    if (((_c2 = error.response) == null ? void 0 : _c2.status) === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        const { refreshToken, token: currentToken } = useAuthStore.getState();
        if ((currentToken == null ? void 0 : currentToken.startsWith("demo-")) || (refreshToken == null ? void 0 : refreshToken.startsWith("demo-"))) {
          return Promise.reject(error);
        }
        if (!refreshToken) throw new Error("No refresh token");
        const response = await axios.post(`${API_BASE}/auth/refresh`, { refreshToken });
        const { token, user } = response.data.data;
        useAuthStore.getState().login(user, token, refreshToken);
        originalRequest.headers.Authorization = `Bearer ${token}`;
        return api(originalRequest);
      } catch {
        useAuthStore.getState().logout();
        window.location.replace(getRouteUrl("login"));
        return Promise.reject(error);
      }
    }
    return Promise.reject(error);
  }
);
const authAPI = {
  login: (identifier, password) => api.post("/auth/login", { email: identifier, password }),
  register: (data) => api.post("/auth/register", data),
  googleAuth: (token) => api.post("/auth/google", { token }),
  forgotPassword: (email) => api.post("/auth/forgot-password", { email }),
  resetPassword: (token, password) => api.post("/auth/reset-password", { token, password }),
  me: () => api.get("/auth/me")
};
const studentsAPI = {
  getAll: (params, config) => api.get("/students", { params, ...config }),
  getById: (id) => api.get(`/students/${id}`),
  create: (data) => api.post("/students", data),
  getGrades: (id) => api.get(`/students/${id}/grades`),
  getAssignments: (id) => api.get(`/students/${id}/assignments`),
  getTimetable: (id) => api.get(`/students/${id}/timetable`),
  getAnalytics: (id) => api.get(`/students/${id}/analytics`),
  update: (id, data) => api.put(`/students/${id}`, data),
  delete: (id) => api.delete(`/students/${id}`)
};
const registryAPI = {
  getFamilies: () => api.get("/registry/families"),
  getDirectory: () => api.get("/registry/directory"),
  createEntity: (entityType, data) => api.post(`/registry/entities/${entityType}`, data),
  updateEntity: (entityType, identifier, data, identifierType = "orbitId") => api.patch(`/registry/entities/${entityType}/${identifier}`, data, { params: { identifierType } }),
  deleteEntity: (entityType, identifier, identifierType = "orbitId") => api.delete(`/registry/entities/${entityType}/${identifier}`, { params: { identifierType } }),
  registerFamily: (data) => api.post("/registry/families", data)
};
const admissionsAPI = {
  getAll: (params) => api.get("/admissions", { params }),
  getById: (id) => api.get(`/admissions/${id}`),
  getByNumber: (number) => api.get(`/admissions/track/${number}`),
  create: (data) => api.post("/admissions", data),
  updateStatus: (id, status, notes) => api.patch(`/admissions/${id}/status`, { status, notes }),
  uploadDocument: (id, formData) => api.post(`/admissions/${id}/documents`, formData, {
    headers: { "Content-Type": "multipart/form-data" }
  })
};
const contactAPI = {
  send: (data) => api.post("/contact", data)
};
const aiAPI = {
  chat: (messages, language) => api.post("/ai/chat", { messages, language }),
  tutor: (subject, question, studentId) => api.post("/ai/tutor", { subject, question, studentId }),
  generateQuiz: (subject, topic, difficulty) => api.post("/ai/quiz", { subject, topic, difficulty }),
  getRecommendations: (studentId) => api.get(`/ai/recommendations/${studentId}`),
  analyzePerformance: (studentId) => api.get(`/ai/analytics/${studentId}`)
};
const generateId = () => Math.random().toString(36).substring(2, 9);
const SCHOOL_CONTACT = {
  email: "kinshasachristianschool@gmail.com",
  phone: "+243 895 326 011",
  address: "Avenue de la République No. 1, Macampagne, Ngaliema, Kinshasa"
};
const WELCOME_MESSAGES = {
  en: `Hello! I am the KCS visitor assistant. Ask me about admissions, programs, fees, events, location, or KCS Nexus access.`,
  fr: `Bonjour ! Je suis l'assistant KCS pour les visiteurs. Posez-moi vos questions sur les admissions, les programmes, les frais, les événements, l'adresse ou l'accès à KCS Nexus.`
};
const normalize$1 = (value) => value.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
const hasAny = (value, keywords) => keywords.some((keyword) => value.includes(keyword));
const formatSchoolList = (items) => items.map((item) => `- ${item}`).join("\n");
const getLocalSchoolResponse = (question, lang) => {
  const q = normalize$1(question);
  if (lang === "fr") {
    if (hasAny(q, ["admission", "inscription", "inscrire", "postuler"])) {
      return `Pour postuler à KCS :
${formatSchoolList([
        "ouvrez la page Admissions et complétez le formulaire",
        "préparez le certificat de naissance, le bulletin ou relevé précédent, la classe souhaitée et les contacts du parent",
        `contactez l'école au ${SCHOOL_CONTACT.phone} ou à ${SCHOOL_CONTACT.email}`
      ])}

Donnez-moi l'âge ou la classe de l'enfant et je vous orienterai plus précisément.`;
    }
    if (hasAny(q, ["frais", "cout", "prix", "scolarite", "paiement"])) {
      return `Les frais dépendent de la classe et des modalités de paiement. Pour obtenir le montant officiel et à jour, contactez l'administration :
- ${SCHOOL_CONTACT.email}
- ${SCHOOL_CONTACT.phone}

Vous pouvez aussi demander les options de paiement et les documents requis.`;
    }
    if (hasAny(q, ["programme", "classe", "maternelle", "primaire", "secondaire", "ap", "academ"])) {
      return `KCS propose :
${formatSchoolList([
        "Kindergarten : K3-K5",
        "Elementary School : Grade 1-Grade 5",
        "Middle School : Grade 6-Grade 8",
        "High School : Grade 9-Grade 12"
      ])}

L'école combine éducation chrétienne, programme académique américain, STEAM, leadership, arts, sports et opportunités AP au lycée.`;
    }
    if (hasAny(q, ["contact", "telephone", "adresse", "email", "situe", "localisation"])) {
      return `Contacts KCS :
- Adresse : ${SCHOOL_CONTACT.address}
- Téléphone : ${SCHOOL_CONTACT.phone}
- Email : ${SCHOOL_CONTACT.email}`;
    }
    if (hasAny(q, ["horaire", "calendrier", "evenement", "reunion", "rentree"])) {
      return `Pour les horaires, événements, réunions et dates importantes, consultez les pages News/Events de Nexus ou contactez l'école au ${SCHOOL_CONTACT.phone}.`;
    }
    if (hasAny(q, ["connexion", "compte", "mot de passe", "nexus", "portail", "parent", "eleve", "enseignant"])) {
      return `KCS Nexus regroupe les portails parents, élèves, enseignants et administration. Si vous avez un problème de connexion, vérifiez votre email ou votre code d'accès, puis contactez l'administration avec votre nom complet et votre rôle.`;
    }
    return `Je peux répondre sur les admissions, les programmes, les frais, les événements, l'adresse, les contacts et l'accès à KCS Nexus.

Pour une réponse plus précise, indiquez la classe, l'âge de l'élève ou le portail concerné.

Contact direct : ${SCHOOL_CONTACT.phone} | ${SCHOOL_CONTACT.email}`;
  }
  if (hasAny(q, ["admission", "apply", "enroll", "registration"])) {
    return `To apply to KCS:
- open the Admissions page and complete the form
- prepare the birth certificate, previous report/transcript, requested grade, and parent contacts
- call ${SCHOOL_CONTACT.phone} or email ${SCHOOL_CONTACT.email}

Tell me the learner age or grade and I can guide you more precisely.`;
  }
  if (hasAny(q, ["fee", "fees", "tuition", "cost", "price", "payment"])) {
    return `Fees depend on the grade and payment option. For the official current amount, contact administration:
- ${SCHOOL_CONTACT.email}
- ${SCHOOL_CONTACT.phone}`;
  }
  if (hasAny(q, ["program", "grade", "kindergarten", "elementary", "middle", "high", "ap", "academic"])) {
    return `KCS offers:
- Kindergarten: K3-K5
- Elementary: Grade 1-Grade 5
- Middle School: Grade 6-Grade 8
- High School: Grade 9-Grade 12

The school combines Christian education, American academics, STEAM, leadership, arts, athletics, and AP opportunities in high school.`;
  }
  if (hasAny(q, ["contact", "phone", "address", "email", "where", "location"])) {
    return `KCS contact details:
- Address: ${SCHOOL_CONTACT.address}
- Phone: ${SCHOOL_CONTACT.phone}
- Email: ${SCHOOL_CONTACT.email}`;
  }
  if (hasAny(q, ["schedule", "calendar", "event", "meeting", "opening"])) {
    return `For schedules, events, meetings, and important dates, check the Nexus News/Events pages or call the school at ${SCHOOL_CONTACT.phone}.`;
  }
  return `I can answer questions about admissions, programs, fees, events, location, contacts, and KCS Nexus access.

Direct contact: ${SCHOOL_CONTACT.phone} | ${SCHOOL_CONTACT.email}`;
};
const AIChat = () => {
  const { chatOpen, toggleChat, language } = useUIStore();
  const [messages, setMessages] = reactExports.useState([]);
  const [input, setInput] = reactExports.useState("");
  const [isLoading, setIsLoading] = reactExports.useState(false);
  const [chatLanguage, setChatLanguage] = reactExports.useState(language === "fr" ? "fr" : "en");
  const [minimized, setMinimized] = reactExports.useState(false);
  const messagesEndRef = reactExports.useRef(null);
  const inputRef = reactExports.useRef(null);
  const nextChatLanguage = chatLanguage === "en" ? "fr" : "en";
  reactExports.useEffect(() => {
    setChatLanguage(language === "fr" ? "fr" : "en");
  }, [language]);
  reactExports.useEffect(() => {
    setMessages((current) => {
      if (current.length > 1) return current;
      return [
        {
          id: generateId(),
          role: "assistant",
          content: WELCOME_MESSAGES[chatLanguage],
          timestamp: (/* @__PURE__ */ new Date()).toISOString()
        }
      ];
    });
  }, [chatLanguage]);
  reactExports.useEffect(() => {
    var _a2, _b2;
    if (chatOpen && !minimized) {
      (_a2 = messagesEndRef.current) == null ? void 0 : _a2.scrollIntoView({ behavior: "smooth" });
      (_b2 = inputRef.current) == null ? void 0 : _b2.focus();
    }
  }, [messages, chatOpen, minimized]);
  const sendMessage = async (draft = input) => {
    var _a2, _b2, _c2, _d2;
    const cleanInput = draft.trim();
    if (!cleanInput || isLoading) return;
    const userMessage = {
      id: generateId(),
      role: "user",
      content: cleanInput,
      timestamp: (/* @__PURE__ */ new Date()).toISOString()
    };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);
    try {
      const recentMessages = [...messages.slice(-6), userMessage].map((message) => ({
        role: message.role,
        content: message.content
      }));
      const response = await aiAPI.chat(recentMessages, chatLanguage);
      const assistantContent = ((_b2 = (_a2 = response.data) == null ? void 0 : _a2.data) == null ? void 0 : _b2.response) || ((_d2 = (_c2 = response.data) == null ? void 0 : _c2.data) == null ? void 0 : _d2.message) || getLocalSchoolResponse(cleanInput, chatLanguage);
      setMessages((prev) => [
        ...prev,
        {
          id: generateId(),
          role: "assistant",
          content: assistantContent,
          timestamp: (/* @__PURE__ */ new Date()).toISOString()
        }
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          id: generateId(),
          role: "assistant",
          content: getLocalSchoolResponse(cleanInput, chatLanguage),
          timestamp: (/* @__PURE__ */ new Date()).toISOString()
        }
      ]);
    } finally {
      setIsLoading(false);
    }
  };
  const handleKeyDown = (event) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      sendMessage();
    }
  };
  const quickQuestions = chatLanguage === "fr" ? ["Comment inscrire mon enfant ?", "Quels programmes ?", "Quels frais ?", "Où est KCS ?"] : ["How do I apply?", "What programs?", "Tuition fees?", "Where is KCS?"];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: !chatOpen && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.button,
      {
        initial: { scale: 0, opacity: 0 },
        animate: { scale: 1, opacity: 1 },
        exit: { scale: 0, opacity: 0 },
        onClick: toggleChat,
        className: "fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-2xl text-white shadow-kcs-lg transition-all duration-300 hover:scale-110 hover:shadow-kcs kcs-gradient",
        "aria-label": "Open KCS assistant",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { size: 24 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -right-1 -top-1 h-4 w-4 animate-pulse rounded-full bg-kcs-gold-400" })
        ]
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: chatOpen && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, scale: 0.8, y: 20 },
        animate: { opacity: 1, scale: 1, y: 0, height: minimized ? "auto" : 540 },
        exit: { opacity: 0, scale: 0.8, y: 20 },
        transition: { duration: 0.3, type: "spring", stiffness: 300, damping: 30 },
        className: "nexus-glass-card fixed bottom-4 right-4 z-50 flex w-[380px] max-w-[calc(100vw-2rem)] flex-col overflow-hidden rounded-2xl sm:bottom-6 sm:right-6",
        style: { maxHeight: minimized ? void 0 : "min(540px, calc(100dvh - 2rem))" },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-shrink-0 items-center justify-between p-4 kcs-gradient", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-9 w-9 items-center justify-center rounded-xl bg-white/20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Bot, { size: 20, className: "text-white" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-white", children: "KCS Assistant" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2 w-2 rounded-full bg-green-400" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-kcs-blue-100", children: chatLanguage === "fr" ? "Réponses scolaires en ligne" : "School answers online" })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  onClick: () => setChatLanguage(nextChatLanguage),
                  className: "flex h-7 w-7 items-center justify-center rounded-lg bg-white/20 text-xs font-bold text-white transition-colors hover:bg-white/30",
                  title: nextChatLanguage === "fr" ? "FranÃ§ais" : "English",
                  type: "button",
                  children: nextChatLanguage.toUpperCase()
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  onClick: () => setMinimized(!minimized),
                  className: "flex h-7 w-7 items-center justify-center rounded-lg bg-white/20 text-white transition-colors hover:bg-white/30",
                  "aria-label": "Minimize assistant",
                  type: "button",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(Minimize2, { size: 14 })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  onClick: toggleChat,
                  className: "flex h-7 w-7 items-center justify-center rounded-lg bg-white/20 text-white transition-colors hover:bg-white/30",
                  "aria-label": "Close assistant",
                  type: "button",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 14 })
                }
              )
            ] })
          ] }),
          !minimized && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-0 flex-1 space-y-3 overflow-y-auto p-4", children: [
              messages.map((message) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `flex gap-2.5 ${message.role === "user" ? "flex-row-reverse" : "flex-row"}`, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: `flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-lg ${message.role === "user" ? "bg-kcs-blue-600 text-white" : "bg-kcs-blue-100 text-kcs-blue-600 dark:bg-kcs-blue-800 dark:text-kcs-blue-300"}`,
                    children: message.role === "user" ? /* @__PURE__ */ jsxRuntimeExports.jsx(User, { size: 14 }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Bot, { size: 14 })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: `max-w-[80%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed ${message.role === "user" ? "rounded-tr-sm bg-kcs-blue-600 text-white" : "rounded-tl-sm border border-white/55 bg-white/55 text-gray-800 shadow-sm backdrop-blur-xl dark:border-white/10 dark:bg-kcs-blue-900/45 dark:text-gray-200"}`,
                    style: { whiteSpace: "pre-line" },
                    children: message.content
                  }
                )
              ] }, message.id)),
              isLoading && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-lg bg-kcs-blue-100 dark:bg-kcs-blue-800", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Bot, { size: 14, className: "text-kcs-blue-600 dark:text-kcs-blue-300" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 rounded-2xl rounded-tl-sm border border-white/55 bg-white/55 px-4 py-3 backdrop-blur-xl dark:border-white/10 dark:bg-kcs-blue-900/45", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Loader2, { size: 14, className: "animate-spin text-kcs-blue-600 dark:text-kcs-blue-400" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-gray-500 dark:text-gray-400", children: chatLanguage === "fr" ? "Recherche de la meilleure réponse..." : "Finding the best answer..." })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref: messagesEndRef })
            ] }),
            messages.length <= 1 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2 px-4 pb-2", children: quickQuestions.map((question) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: () => sendMessage(question),
                className: "rounded-full bg-kcs-blue-50 px-3 py-1.5 text-xs text-kcs-blue-700 transition-colors hover:bg-kcs-blue-100 dark:bg-kcs-blue-900/30 dark:text-kcs-blue-300 dark:hover:bg-kcs-blue-800/50",
                type: "button",
                children: question
              },
              question
            )) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 border-t border-white/55 bg-white/45 p-3 backdrop-blur-2xl dark:border-white/10 dark:bg-kcs-blue-950/40", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  ref: inputRef,
                  value: input,
                  onChange: (event) => setInput(event.target.value),
                  onKeyDown: handleKeyDown,
                  placeholder: chatLanguage === "fr" ? "Posez une question..." : "Ask a question...",
                  className: "flex-1 rounded-xl border border-gray-200 bg-gray-50 px-3.5 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-kcs-blue-500 dark:border-kcs-blue-700 dark:bg-kcs-blue-900/50 dark:text-white dark:placeholder-gray-500",
                  disabled: isLoading
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  onClick: () => sendMessage(),
                  disabled: !input.trim() || isLoading,
                  className: "flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl text-white transition-all duration-200 hover:scale-105 hover:shadow-kcs active:scale-95 disabled:cursor-not-allowed disabled:opacity-50 kcs-gradient",
                  "aria-label": "Send message",
                  type: "button",
                  children: isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(Loader2, { size: 16, className: "animate-spin" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { size: 16 })
                }
              )
            ] })
          ] })
        ]
      }
    ) })
  ] });
};
const Layout = () => {
  const location = useLocation();
  const { theme } = useUIStore();
  reactExports.useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [theme]);
  reactExports.useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);
  const isPortalRoute = location.pathname.startsWith("/portal") || location.pathname.startsWith("/admin");
  if (isPortalRoute) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {});
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "public-site-shell min-h-screen flex flex-col dark:bg-kcs-blue-950", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "public-site-main flex-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AIChat, {})
  ] });
};
const ProtectedRoute = ({ children, allowedRoles, redirectTo = "/login" }) => {
  const { isAuthenticated, user } = useAuthStore();
  const location = useLocation();
  if (!isAuthenticated) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Navigate, { to: redirectTo, state: { from: location }, replace: true });
  }
  if (allowedRoles && user && !allowedRoles.includes(user.role)) {
    const fallbackRoute = user.role === "admin" ? "/admin" : redirectTo;
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Navigate, { to: fallbackRoute, state: { from: location, unauthorizedRole: user.role }, replace: true });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children });
};
const globalFrenchText = {
  "Kinshasa Christian School - Macampagne, Ngaliema": "Kinshasa Christian School - Macampagne, Ngaliema",
  "Welcome to": "Bienvenue à",
  "Kinshasa Christian": "Kinshasa Christian",
  School: "School",
  "Letting Our Light Shine": "Faisons briller notre lumière",
  "We are committed to help raise the next generation of leaders through quality Christian education, biblical values, compassion, and academic excellence.": "Nous nous engageons à former la prochaine génération de leaders grâce à une éducation chrétienne de qualité, des valeurs bibliques, la compassion et l’excellence académique.",
  "Enroll Now": "Inscrire maintenant",
  "Explore Programs": "Découvrir les programmes",
  "Christian Education": "Éducation chrétienne",
  "Levels Offered": "Niveaux proposés",
  "Official Phones": "Téléphones officiels",
  "Kinshasa Campus": "Campus de Kinshasa",
  "Academic Excellence": "Excellence académique",
  "World-Class Academic": "Programmes académiques",
  Programs: "Programmes",
  "A comprehensive Christian education from K3 through Grade 12, designed for academic growth, spiritual maturity, and strong moral character.": "Une éducation chrétienne complète de K3 à la terminale, conçue pour la croissance académique, la maturité spirituelle et un caractère solide.",
  Kindergarten: "Maternelle",
  Elementary: "Primaire",
  "Middle & High School": "Collège et lycée",
  "Early Literacy": "Première lecture",
  "Faith Formation": "Formation dans la foi",
  "Creative Play": "Jeu créatif",
  "Character Growth": "Développement du caractère",
  "Core Academics": "Matières fondamentales",
  "Bible Learning": "Apprentissage biblique",
  "Moral Integrity": "Intégrité morale",
  "Love of Learning": "Goût d’apprendre",
  "Academic Rigor": "Rigueur académique",
  "Spiritual Maturity": "Maturité spirituelle",
  "Future Readiness": "Préparation à l’avenir",
  "Learn More": "En savoir plus",
  "Learn More About KCS": "En savoir plus sur KCS",
  "Our Purpose": "Notre objectif",
  "Transforming Lives Through": "Transformer des vies par",
  "Faith & Learning": "la foi et l’apprentissage",
  "Spiritual Life at KCS": "Vie spirituelle à KCS",
  "Prayer, Bible studies, mentorship": "Prière, études bibliques, mentorat",
  Mission: "Mission",
  Vision: "Vision",
  Faith: "Foi",
  Leadership: "Leadership",
  Service: "Service",
  Excellence: "Excellence",
  Future: "Avenir",
  Team: "Équipe",
  Community: "Communauté",
  Event: "Événement",
  Announcements: "Annonces",
  Portals: "Portails",
  "KCS Nexus Platform": "Plateforme KCS Nexus",
  "Connected School Life": "Vie scolaire connectée",
  "for KCS": "pour KCS",
  "KCS Nexus brings the school community together with admissions, announcements, events, galleries, portals, and digital learning tools for students, parents, and teachers.": "KCS Nexus rassemble la communauté scolaire avec les admissions, les annonces, les événements, les galeries, les portails et les outils numériques pour les élèves, les parents et les enseignants.",
  "Important school updates": "Informations importantes de l’école",
  "Events and activities": "Événements et activités",
  "Student, parent, teacher access": "Accès élèves, parents et enseignants",
  "Access Portal": "Accéder au portail",
  "Stay Informed": "Restez informés",
  "Latest News & Events": "Dernières actualités et événements",
  "View All": "Tout voir",
  "Read More": "Lire la suite",
  Testimonials: "Témoignages",
  "Voices from Our Community": "Voix de notre communauté",
  "Begin Your KCS Journey Today": "Commencez votre parcours KCS aujourd’hui",
  "Online registration is available for families who want their children to grow in faith, knowledge, character, and service.": "L’inscription en ligne est disponible pour les familles qui souhaitent voir leurs enfants grandir dans la foi, la connaissance, le caractère et le service.",
  "Contact Admissions": "Contacter les admissions",
  "Kinshasa, DRC - Letting Our Light Shine": "Kinshasa, RDC - Faisons briller notre lumière",
  "About KCS": "À propos de KCS",
  "About ": "À propos de ",
  "KCS provides a nurturing Christian environment where students grow academically, socially, and spiritually.": "KCS offre un environnement chrétien bienveillant où les élèves grandissent sur les plans académique, social et spirituel.",
  "Our Story": "Notre histoire",
  "A Legacy Built on": "Un héritage fondé sur",
  "Faith & Purpose": "la foi et le sens",
  "Kinshasa Christian School prioritizes the spiritual development of students through prayer, services, Bible studies, and mentorship programs.": "Kinshasa Christian School donne la priorité au développement spirituel des élèves par la prière, les cultes, les études bibliques et le mentorat.",
  "KCS is committed to excellence in teaching and care while helping children become compassionate leaders ready to transform society with a biblical worldview.": "KCS vise l’excellence dans l’enseignement et l’accompagnement, tout en aidant les enfants à devenir des leaders compatissants, prêts à transformer la société avec une vision biblique du monde.",
  "KCS Students": "Élèves KCS",
  "Academic, social, spiritual growth": "Croissance académique, sociale et spirituelle",
  "Life-long Learners": "Apprenants pour la vie",
  "Passionate and independent": "Passionnés et autonomes",
  "Biblical Worldview": "Vision biblique du monde",
  "Ready to transform society": "Prêts à transformer la société",
  "High standards in education and care": "Standards élevés dans l’éducation et l’accompagnement",
  "American Curriculum": "Programme américain",
  "Faith-based learning with a biblical worldview": "Apprentissage fondé sur la foi avec une vision biblique du monde",
  "Mission, Vision & Values": "Mission, vision et valeurs",
  "Our Mission": "Notre mission",
  "Our Vision": "Notre vision",
  "Our Promise": "Notre promesse",
  "To provide an exceptional American education rooted in Christian values, empowering students in Kinshasa and across the Congo to become servant leaders who transform their communities and the world.": "Offrir une éducation américaine exceptionnelle, ancrée dans les valeurs chrétiennes, afin de permettre aux élèves de Kinshasa et du Congo de devenir des leaders serviteurs qui transforment leurs communautés et le monde.",
  "To be the leading international school in Central Africa, recognized for academic excellence, spiritual depth, and the development of globally-minded leaders who make a lasting impact.": "Être l’école internationale de référence en Afrique centrale, reconnue pour son excellence académique, sa profondeur spirituelle et la formation de leaders ouverts sur le monde.",
  "Every student who walks through our doors receives a world-class education, personalized care, and the tools to succeed at the highest levels - academically, professionally, and spiritually.": "Chaque élève qui franchit nos portes reçoit une éducation de classe mondiale, un accompagnement personnalisé et les outils pour réussir au plus haut niveau, sur les plans académique, professionnel et spirituel.",
  "Our Team": "Notre équipe",
  "Leadership Team": "Équipe de direction",
  "Experienced, passionate educators dedicated to the KCS mission.": "Des éducateurs expérimentés et passionnés, dévoués à la mission de KCS.",
  Faculty: "Corps enseignant",
  "Expert Educators": "Éducateurs experts",
  "Over 80 certified teachers from around the world, bringing global perspectives to the classroom.": "Plus de 80 enseignants certifiés venus du monde entier apportent des perspectives internationales en classe.",
  experience: "d’expérience",
  "Our Journey": "Notre parcours",
  "KCS Through the Years": "KCS au fil des années",
  "Spiritual Life": "Vie spirituelle",
  "Daily prayer, services, Bible studies, and mentorship support student growth.": "La prière quotidienne, les cultes, les études bibliques et le mentorat soutiennent la croissance des élèves.",
  "KCS equips children to become passionate, independent, life-long learners.": "KCS équipe les enfants pour devenir des apprenants passionnés, autonomes et permanents.",
  "The school helps raise leaders prepared for a competitive world with compassion and mercy.": "L’école aide à former des leaders préparés à un monde compétitif, avec compassion et miséricorde.",
  "KCS values qualified Christian educators and high standards of care and instruction.": "KCS valorise les éducateurs chrétiens qualifiés et des standards élevés d’accompagnement et d’enseignement.",
  "Students are encouraged to live out love, compassion, and service to others.": "Les élèves sont encouragés à vivre l’amour, la compassion et le service envers les autres.",
  "Digital tools connect families, students, teachers, and school information.": "Les outils numériques connectent les familles, les élèves, les enseignants et les informations scolaires.",
  "Become Part of the KCS Story": "Rejoignez l’histoire de KCS",
  "Join our community of learners, leaders, and believers. Your chapter in the KCS story starts with an application.": "Rejoignez notre communauté d’apprenants, de leaders et de croyants. Votre chapitre dans l’histoire de KCS commence par une candidature.",
  "Apply Now": "Postuler maintenant",
  "Contact Us": "Contactez-nous",
  "Academic Programs": "Programmes académiques",
  "A world-class American curriculum designed to challenge, inspire, and prepare students for excellence at the highest level.": "Un programme américain de classe mondiale conçu pour stimuler, inspirer et préparer les élèves à l’excellence au plus haut niveau.",
  "Nurturing Early Learners": "Accompagner les jeunes apprenants",
  "Building Strong Foundations": "Construire des bases solides",
  "Growing in Knowledge & Character": "Grandir en connaissance et en caractère",
  "Ready for the World Stage": "Prêt pour la scène mondiale",
  "Core Subjects": "Matières principales",
  Highlights: "Points forts",
  Departments: "Départements",
  "Academic Departments": "Départements académiques",
  "Advanced Placement": "Cours avancés",
  "AP & Honors Courses": "Cours AP et Honors",
  "KCS offers 10+ College Board AP courses, giving high school students the opportunity to earn college credit while building the academic rigor needed for top universities.": "KCS propose plus de 10 cours AP du College Board, donnant aux lycéens l’occasion d’obtenir des crédits universitaires tout en développant la rigueur académique attendue par les meilleures universités.",
  "Start Your Academic Journey at KCS": "Commencez votre parcours académique à KCS",
  "Applications are open from K3 through Grade 12. Join a community of learners who dare to excel.": "Les candidatures sont ouvertes de K3 à la terminale. Rejoignez une communauté d’apprenants qui osent viser l’excellence.",
  "Contact KCS": "Contacter KCS",
  "Let's Start A Conversation": "Commençons une conversation",
  "Reach the admissions office, leadership team, or support staff. We respond promptly and can help you plan a visit, application, or transfer.": "Contactez le bureau des admissions, la direction ou le support. Nous répondons rapidement et pouvons vous aider à planifier une visite, une candidature ou un transfert.",
  "Contact Details": "Coordonnées",
  "Campus Address": "Adresse du campus",
  Phone: "Téléphone",
  Email: "E-mail",
  "Office Hours": "Heures de bureau",
  "Send A Message": "Envoyer un message",
  "Use the form below for admissions inquiries, partnership requests, or general questions.": "Utilisez le formulaire pour les admissions, les partenariats ou les questions générales.",
  "Message sent": "Message envoyé",
  "Our team will get back to you shortly.": "Notre équipe vous répondra rapidement.",
  "Full Name": "Nom complet",
  "Email Address": "Adresse e-mail",
  Subject: "Sujet",
  Message: "Message",
  Sending: "Envoi",
  "Sending...": "Envoi...",
  "Send Message": "Envoyer le message",
  Optional: "Optionnel",
  "How can we help?": "Comment pouvons-nous aider ?",
  "Tell us more about your request...": "Dites-nous en plus sur votre demande...",
  "Admissions 2025-2026 Now Open": "Admissions 2025-2026 ouvertes",
  "Begin Your": "Commencez votre",
  "KCS Journey": "parcours KCS",
  "Kinshasa Christian School welcomes families seeking an excellence-driven, faith-based American education for their children.": "Kinshasa Christian School accueille les familles qui recherchent pour leurs enfants une éducation américaine fondée sur la foi et orientée vers l’excellence.",
  "View Programs": "Voir les programmes",
  "Available Programs": "Programmes disponibles",
  "Spaces available for the 2025-2026 academic year": "Places disponibles pour l’année scolaire 2025-2026",
  "spots remaining": "places restantes",
  "Admission Process": "Processus d’admission",
  "Six simple steps to joining KCS": "Six étapes simples pour rejoindre KCS",
  "Submit Application": "Soumettre la candidature",
  "Complete the online form with student and family details.": "Remplissez le formulaire en ligne avec les informations de l’élève et de la famille.",
  "Document Review": "Étude du dossier",
  "Our admissions team reviews transcripts, recommendation letters, and required documents.": "Notre équipe des admissions examine les relevés de notes, les lettres de recommandation et les documents requis.",
  "Entrance Assessment": "Évaluation d’entrée",
  "Scheduled assessment in English, Math, and general knowledge for new students.": "Évaluation programmée en anglais, en mathématiques et en culture générale pour les nouveaux élèves.",
  "Parent Interview": "Entretien avec les parents",
  "A meeting with the Principal and Admissions Director to discuss school fit and expectations.": "Une rencontre avec la direction et le service des admissions afin d’échanger sur l’adéquation avec l’école et les attentes.",
  "Admission Decision": "Décision d’admission",
  "You will receive a decision within 5-10 business days via email.": "Vous recevrez une décision par e-mail sous 5 à 10 jours ouvrables.",
  "Enrollment & Registration": "Inscription et enregistrement",
  "Complete enrollment forms, pay registration fees, and join the KCS family!": "Remplissez les formulaires d’inscription, réglez les frais d’enregistrement et rejoignez la famille KCS !",
  "Required Documents": "Documents requis",
  "Please prepare the following documents before beginning your application.": "Veuillez préparer les documents suivants avant de commencer votre candidature.",
  "Completed online application form": "Formulaire de candidature en ligne complété",
  "Birth certificate": "Acte de naissance",
  "Previous school transcript": "Relevé de notes de l’école précédente",
  "Parent or guardian contact information": "Coordonnées du parent ou du tuteur",
  "Requested class level": "Niveau de classe demandé",
  "Additional comments for the admissions team": "Commentaires supplémentaires pour l’équipe des admissions",
  "Key Dates 2025-2026": "Dates clés 2025-2026",
  "Applications Open": "Ouverture des candidatures",
  "Entrance Assessments": "Évaluations d’entrée",
  "Decisions Released": "Publication des décisions",
  "Enrollment Period": "Période d’inscription",
  "First Day of School": "Premier jour d’école",
  "Online Application": "Candidature en ligne",
  "Complete all sections to submit your application.": "Complétez toutes les sections pour envoyer votre candidature.",
  "Application Submitted!": "Candidature envoyée !",
  "Thank you for applying to KCS. We will be in touch within 5-10 business days.": "Merci d’avoir postulé à KCS. Nous vous contacterons sous 5 à 10 jours ouvrables.",
  "Your Application ID": "Votre numéro de candidature",
  "Save this ID to track your application status.": "Conservez ce numéro pour suivre l’état de votre candidature.",
  Student: "Élève",
  Parent: "Parent",
  Documents: "Documents",
  Review: "Vérification",
  "Student Information": "Informations sur l’élève",
  "First Name *": "Prénom *",
  "Last Name *": "Nom *",
  "Date of Birth *": "Date de naissance *",
  "Nationality *": "Nationalité *",
  "Applying for Grade *": "Classe demandée *",
  "Current School *": "École actuelle *",
  "Languages Spoken": "Langues parlées",
  "Select grade...": "Sélectionner une classe...",
  "School name": "Nom de l’école",
  "Next: Parent Info": "Suivant : parent",
  "Parent / Guardian Information": "Informations sur le parent ou tuteur",
  "Relationship to Student *": "Lien avec l’élève *",
  "Phone Number *": "Numéro de téléphone *",
  "Home Address *": "Adresse du domicile *",
  Occupation: "Profession",
  Back: "Retour",
  "Next: Documents": "Suivant : documents",
  "Upload Documents": "Téléverser les documents",
  "Birth Certificate": "Acte de naissance",
  "Previous School Transcript": "Relevé de notes précédent",
  "Additional Required Documents": "Documents supplémentaires requis",
  "Upload PDF / JPG": "Téléverser PDF / JPG",
  "* Documents can also be submitted in person at the KCS Admissions Office.": "* Les documents peuvent aussi être déposés directement au bureau des admissions de KCS.",
  "Review Application": "Vérifier la candidature",
  "Review & Submit": "Vérifier et envoyer",
  Name: "Nom",
  DOB: "Date de naissance",
  Nationality: "Nationalité",
  "Applying For": "Classe demandée",
  "Current School": "École actuelle",
  Relationship: "Lien",
  "I confirm that all information provided is accurate and complete. I agree to the KCS": "Je confirme que toutes les informations fournies sont exactes et complètes. J’accepte les",
  "Terms & Conditions": "conditions générales",
  "Privacy Policy": "politique de confidentialité",
  "News &": "Actualités et",
  Events: "événements",
  "Stay connected with the latest happenings, achievements, and upcoming events at KCS.": "Restez informés des dernières nouvelles, réussites et événements à venir à KCS.",
  "Read Full Story": "Lire l’article complet",
  "Search news & events...": "Rechercher des actualités et événements...",
  all: "tout",
  news: "actualités",
  event: "événement",
  announcement: "annonce",
  achievement: "réussite",
  "No results found for": "Aucun résultat trouvé pour",
  "Upcoming Events": "Événements à venir",
  "View Full Calendar": "Voir tout le calendrier",
  "Spring Arts Festival": "Festival artistique de printemps",
  "AP Exams Begin": "Début des examens AP",
  "Annual Sports Day": "Journée sportive annuelle",
  "Parent-Teacher Conference": "Rencontre parents-enseignants",
  "Baccalaureate Service": "Cérémonie de baccalauréat",
  "Graduation Ceremony 2026": "Cérémonie de remise des diplômes 2026",
  "Life At KCS": "La vie à KCS",
  "A Gallery Built Around": "Une galerie autour de",
  "Learning, Faith, and Belonging": "l’apprentissage, la foi et l’appartenance",
  "Explore the rhythm of Kinshasa Christian School through classrooms, competitions, worship, the arts, and the moments that shape student life.": "Découvrez le rythme de Kinshasa Christian School à travers les salles de classe, les compétitions, les cultes, les arts et les moments qui façonnent la vie des élèves.",
  "Browse Collection": "Parcourir la collection",
  "Watch Highlights": "Voir les moments forts",
  Photos: "Photos",
  "Video Stories": "Histoires vidéo",
  "Annual Events Covered": "Événements annuels couverts",
  "Student Moments Captured": "Moments d’élèves capturés",
  "Photo Collection": "Collection photo",
  "Filter by theme to see how KCS blends academic rigor, character formation, and a globally minded campus culture.": "Filtrez par thème pour voir comment KCS associe rigueur académique, formation du caractère et culture scolaire ouverte sur le monde.",
  All: "Tout",
  "Campus Life": "Vie du campus",
  Academics: "Études",
  Sports: "Sports",
  Arts: "Arts",
  "Video Highlights": "Moments forts en vidéo",
  "A short-form look at signature KCS experiences, from worship gatherings to student-led innovation.": "Un aperçu court des expériences marquantes de KCS, des temps de culte à l’innovation portée par les élèves.",
  "Visit In Person": "Visiter en personne",
  "Experience The Campus Beyond The Screen": "Découvrez le campus au-delà de l’écran",
  "Schedule a guided visit to meet our team, walk the campus, and see the culture of KCS first-hand.": "Planifiez une visite guidée pour rencontrer notre équipe, parcourir le campus et découvrir directement la culture de KCS.",
  "Book A Campus Tour": "Réserver une visite du campus",
  "Video Highlight": "Moment fort vidéo",
  "Photo Story": "Reportage photo",
  "This gallery item reflects the everyday excellence, warmth, and purpose that define the student experience at KCS.": "Cet élément de galerie reflète l’excellence quotidienne, la chaleur et le sens qui définissent l’expérience des élèves à KCS.",
  Dashboard: "Tableau de bord",
  "My Grades": "Mes notes",
  Assignments: "Devoirs",
  Timetable: "Emploi du temps",
  "AI Tutor": "Tuteur IA",
  "Student Forum": "Forum des élèves",
  "Parent Forum": "Forum des parents",
  Messages: "Messages",
  "My Profile": "Mon profil",
  Profile: "Profil",
  Performance: "Résultats",
  Calendar: "Calendrier",
  Fees: "Frais scolaires",
  "My Courses": "Mes cours",
  Students: "Élèves",
  Parents: "Parents",
  Teachers: "Enseignants",
  Attendance: "Présences",
  Gradebook: "Carnet de notes",
  Reports: "Rapports",
  "Discipline Report": "Rapport disciplinaire",
  Records: "Dossiers",
  Admissions: "Admissions",
  "Fee Tracking": "Suivi des frais",
  Permissions: "Permissions",
  Transcripts: "Bulletins",
  Communications: "Communications",
  "Staff Attendance": "Présence du personnel",
  Discipline: "Discipline",
  Courses: "Cours",
  Finance: "Finances",
  Media: "Médias",
  "Parent AI Report": "Rapport IA parents",
  "Student AI Report": "Rapport IA élèves",
  "AI Analytics": "Analyses IA",
  Settings: "Paramètres",
  "Light Mode": "Mode clair",
  "Dark Mode": "Mode sombre",
  "Light mode": "Mode clair",
  "Dark mode": "Mode sombre",
  "Main Website": "Site principal",
  "Sign Out": "Se déconnecter",
  "Sign In": "Se connecter",
  Language: "Langue",
  Administrator: "Administrateur",
  "Administrative Staff": "Personnel administratif",
  Teacher: "Enseignant",
  "Good morning": "Bonjour",
  "Good afternoon": "Bon après-midi",
  "Good evening": "Bonsoir",
  "Today's overview": "Vue d'ensemble du jour",
  "Quick Actions": "Actions rapides",
  "Recent Activity": "Activité récente",
  "Academic Overview": "Vue académique",
  "Overall Grade": "Note générale",
  "Current GPA": "Moyenne actuelle",
  "Attendance Rate": "Taux de présence",
  "Upcoming Assignments": "Devoirs à venir",
  "Recent Grades": "Notes récentes",
  "Class Schedule": "Horaire des cours",
  "Teacher Messages": "Messages des enseignants",
  "Parent Messages": "Messages des parents",
  "School Calendar": "Calendrier scolaire",
  "Payment Status": "Statut du paiement",
  "Outstanding Balance": "Solde restant",
  Paid: "Payé",
  Pending: "En attente",
  Overdue: "En retard",
  "View Details": "Voir les détails",
  "Download Report": "Télécharger le rapport",
  "Search": "Rechercher",
  "Filter": "Filtrer",
  "Submit": "Soumettre",
  "Save": "Enregistrer",
  "Cancel": "Annuler",
  "Edit": "Modifier",
  "Delete": "Supprimer",
  "View": "Voir",
  "Upload": "Importer",
  "Download": "Télécharger",
  "No data available": "Aucune donnée disponible",
  "Loading...": "Chargement...",
  "Try Again": "Réessayer",
  "Student Portal": "Portail élève",
  "Parent Portal": "Portail parent",
  "Teacher Portal": "Portail enseignant",
  "Staff Portal": "Portail du personnel",
  "Admin Panel": "Administration",
  Portal: "Portail",
  "Portal Dashboard": "Tableau de bord du portail",
  "Suggestion box": "Boîte à suggestions",
  "Send anonymously": "Envoyer anonymement",
  "Suggestion saved in the confidential channel.": "Suggestion enregistrée dans le canal confidentiel.",
  "Write your suggestion freely...": "Écrivez librement votre suggestion...",
  "Import from Super Admin registry": "Importer depuis le registre super admin",
  "verified students available from the school registry.": "élèves vérifiés disponibles dans le registre scolaire.",
  "Manage classes, grades, attendance, assignments, parents, and interventions from one intelligent cockpit.": "Gérez les classes, les notes, les présences, les devoirs, les parents et les interventions depuis un seul tableau de bord intelligent.",
  "Students are loaded from the class selected when the course is created.": "Les élèves sont chargés depuis la classe choisie lors de la création du cours.",
  "Today schedule": "Horaire d'aujourd'hui",
  Notifications: "Notifications",
  "Unread notifications": "Notifications non lues",
  "See All": "Tout voir",
  "Secure Access": "Accès sécurisé",
  "Enter The Digital Campus Of KCS Nexus": "Entrez dans le campus numérique de KCS Nexus",
  "Access role-based dashboards for students, parents, teachers, and school leadership with AI-powered workflows built into the experience.": "Accédez aux tableaux de bord des élèves, parents, enseignants et responsables scolaires, avec des flux de travail assistés par IA intégrés à l’expérience.",
  "Super admin": "Super administrateur",
  "Administrative staff": "Personnel administratif",
  "Student demo": "Démo élève",
  "Parent demo": "Démo parent",
  "Teacher demo": "Démo enseignant",
  "Admin demo": "Démo administration",
  "Quick Fill": "Remplir vite",
  "Nexus Platform": "Plateforme Nexus",
  "Use your email, access code, or one of the demo accounts.": "Utilisez votre e-mail, votre code d’accès ou l’un des comptes de démonstration.",
  "Email or access code is required": "E-mail ou code d’accès requis",
  "Email or access code": "E-mail ou code d’accès",
  "name@kcsnexus.edu or ACC-ADM-SUPER1": "name@kcsnexus.edu ou ACC-ADM-SUPER1",
  "Enter your password": "Entrez votre mot de passe",
  "Remember me": "Se souvenir de moi",
  "Forgot password?": "Mot de passe oublié ?",
  "Signing in...": "Connexion...",
  "Demo access": "Accès démo",
  "Active session": "Session active",
  "Active session:": "Session active :",
  ". Choose a demo account below to replace this session.": ". Choisissez un compte démo ci-dessous pour remplacer cette session.",
  "Choose a demo account below to replace this session.": "Choisissez un compte démo ci-dessous pour remplacer cette session.",
  "Enter as Super Admin": "Entrer comme Super Administrateur",
  "Need admission support?": "Besoin d’aide pour l’admission ?",
  "Start your application": "Commencer votre candidature",
  "Reset password": "Réinitialiser le mot de passe",
  "Enter your email to receive a secure link, or paste the token from the link to set a new password.": "Entrez votre e-mail pour recevoir un lien sécurisé, ou collez le jeton du lien pour définir un nouveau mot de passe.",
  "Close password reset": "Fermer la réinitialisation",
  "Reset token": "Jeton de réinitialisation",
  "Paste token from email link": "Collez le jeton du lien e-mail",
  "New password": "Nouveau mot de passe",
  "8+ characters": "8 caractères ou plus",
  Confirm: "Confirmer",
  "Repeat password": "Répétez le mot de passe",
  "Processing...": "Traitement...",
  Continue: "Continuer",
  "Core Values": "Valeurs fondamentales",
  "What Drives Everything We Do": "Ce qui guide tout ce que nous faisons",
  "Six pillars that define the KCS experience and shape our students for a lifetime.": "Six piliers qui définissent l’expérience KCS et forment nos élèves pour toute la vie.",
  "Critical Thinking": "Pensée critique",
  "Spiritual life is prioritized through prayer, Bible studies, services, and mentorship.": "La vie spirituelle est priorisée par la prière, les études bibliques, les cultes et le mentorat.",
  "KCS commits to high standards in hiring, teaching, care, and performance.": "KCS s’engage à maintenir des standards élevés dans le recrutement, l’enseignement, l’accompagnement et la performance.",
  "Learning is grounded in Scripture and a Christian understanding of life and conduct.": "L’apprentissage est fondé sur les Écritures et sur une compréhension chrétienne de la vie et de la conduite.",
  "Students are encouraged to grow academically, creatively, socially, and spiritually.": "Les élèves sont encouragés à grandir sur les plans académique, créatif, social et spirituel.",
  "The school helps raise the next generation of compassionate leaders.": "L’école contribue à former la prochaine génération de leaders compatissants.",
  "KCS encourages mercy, compassion, community service, and love for others.": "KCS encourage la miséricorde, la compassion, le service communautaire et l’amour du prochain.",
  "USA Trip": "Voyage aux États-Unis",
  "Brazzaville Trip": "Voyage à Brazzaville",
  "Legacy Day": "Journée héritage",
  "KCS Event": "Événement KCS",
  "KCS Service": "Service KCS",
  "Staff and students explored cultural exchange, educational growth, and renowned academic institutions in the USA.": "Le personnel et les élèves ont découvert les échanges culturels, la croissance éducative et des institutions académiques reconnues aux États-Unis.",
  "KCS students proudly brought home the trophy at the sports and arts festival in Brazzaville.": "Les élèves de KCS ont fièrement ramené le trophée du festival sportif et artistique de Brazzaville.",
  "Students serve the community through street clean-up initiatives and visits to orphanages.": "Les élèves servent la communauté par des initiatives de nettoyage des rues et des visites dans les orphelinats."
};
const textAttributes = ["aria-label", "placeholder", "title"];
const ignoredTags = /* @__PURE__ */ new Set(["SCRIPT", "STYLE", "NOSCRIPT", "CODE", "PRE", "TEXTAREA"]);
const englishByFrench = Object.fromEntries(Object.entries(globalFrenchText).map(([english, french]) => [french, english]));
const normalize = (value) => value.replace(/\s+/g, " ").trim();
const frenchByNormalizedEnglish = Object.fromEntries(Object.entries(globalFrenchText).map(([english, french]) => [normalize(english), french]));
const englishByNormalizedFrench = Object.fromEntries(Object.entries(globalFrenchText).map(([english, french]) => [normalize(french), english]));
const translateText = (value, language) => {
  const trimmed = value.trim();
  if (!trimmed) return value;
  if (language === "fr") {
    if (/^\d+\s+years?\s+experience$/i.test(trimmed)) {
      return value.replace(trimmed, trimmed.replace(/\s+years?\s+experience/i, " ans d’expérience"));
    }
    if (/^Step\s+\d+$/i.test(trimmed)) {
      return value.replace(trimmed, trimmed.replace(/^Step/i, "Étape"));
    }
    if (/^\d+\s+students$/i.test(trimmed)) {
      return value.replace(trimmed, trimmed.replace(/\s+students$/i, " élèves"));
    }
    if (/^\d+\s+spots remaining$/i.test(trimmed)) {
      return value.replace(trimmed, trimmed.replace(/\s+spots remaining$/i, " places restantes"));
    }
  } else {
    if (/^\d+\s+ans d/i.test(trimmed)) {
      return value.replace(trimmed, trimmed.replace(/\s+ans d.*$/i, " years experience"));
    }
    if (/^Étape\s+\d+$/i.test(trimmed)) {
      return value.replace(trimmed, trimmed.replace(/^Étape/i, "Step"));
    }
    if (/^\d+\s+élèves$/i.test(trimmed)) {
      return value.replace(trimmed, trimmed.replace(/\s+élèves$/i, " students"));
    }
    if (/^\d+\s+places restantes$/i.test(trimmed)) {
      return value.replace(trimmed, trimmed.replace(/\s+places restantes$/i, " spots remaining"));
    }
  }
  const normalized = normalize(trimmed);
  const translated = language === "fr" ? globalFrenchText[trimmed] ?? frenchByNormalizedEnglish[normalized] : englishByFrench[trimmed] ?? englishByNormalizedFrench[normalized];
  if (!translated) return value;
  return value.replace(trimmed, translated);
};
const translateNode = (node, language) => {
  if (node instanceof Text) {
    const parent = node.parentElement;
    if (!parent || ignoredTags.has(parent.tagName) || parent.isContentEditable) return;
    const next = translateText(node.nodeValue ?? "", language);
    if (next !== node.nodeValue) {
      node.nodeValue = next;
    }
    return;
  }
  if (!(node instanceof HTMLElement) || ignoredTags.has(node.tagName) || node.isContentEditable) {
    return;
  }
  textAttributes.forEach((attribute) => {
    const value = node.getAttribute(attribute);
    if (value) {
      const next = translateText(value, language);
      if (next !== value) {
        node.setAttribute(attribute, next);
      }
    }
  });
  node.childNodes.forEach((child) => translateNode(child, language));
};
const GlobalTextTranslator = () => {
  const { i18n } = useTranslation();
  const language = useUIStore((state) => state.language);
  const setLanguage = useUIStore((state) => state.setLanguage);
  reactExports.useEffect(() => {
    const normalizedLanguage = language === "fr" ? "fr" : "en";
    const activeLanguage = (i18n.resolvedLanguage || i18n.language || "en").startsWith("fr") ? "fr" : "en";
    document.documentElement.lang = normalizedLanguage;
    if (activeLanguage !== normalizedLanguage) {
      void i18n.changeLanguage(normalizedLanguage);
    }
  }, [i18n, language]);
  reactExports.useEffect(() => {
    let scheduled = 0;
    const run = () => {
      scheduled = 0;
      translateNode(document.body, useUIStore.getState().language === "fr" ? "fr" : "en");
    };
    const schedule = () => {
      if (scheduled) return;
      scheduled = window.requestAnimationFrame(run);
    };
    const syncStoreAndSchedule = (nextLanguage) => {
      const normalizedLanguage = nextLanguage.startsWith("fr") ? "fr" : "en";
      if (useUIStore.getState().language !== normalizedLanguage) {
        setLanguage(normalizedLanguage);
      }
      document.documentElement.lang = normalizedLanguage;
      schedule();
    };
    schedule();
    const observer = new MutationObserver(schedule);
    observer.observe(document.body, {
      childList: true,
      subtree: true,
      characterData: true,
      attributes: true,
      attributeFilter: textAttributes
    });
    const onStoreLanguageChange = (event) => {
      var _a2;
      const nextLanguage = ((_a2 = event.detail) == null ? void 0 : _a2.language) ?? useUIStore.getState().language;
      syncStoreAndSchedule(nextLanguage);
    };
    i18n.on("languageChanged", syncStoreAndSchedule);
    window.addEventListener("kcs-language-change", onStoreLanguageChange);
    return () => {
      if (scheduled) window.cancelAnimationFrame(scheduled);
      observer.disconnect();
      i18n.off("languageChanged", syncStoreAndSchedule);
      window.removeEventListener("kcs-language-change", onStoreLanguageChange);
    };
  }, [i18n, language, setLanguage]);
  return null;
};
const HomePage = reactExports.lazy(() => __vitePreload(() => import("./index-JVYUIPGg.js"), true ? __vite__mapDeps([0,1,2,3,4]) : void 0));
const AboutPage = reactExports.lazy(() => __vitePreload(() => import("./index-DUw0yv5u.js"), true ? __vite__mapDeps([5,1,2,4]) : void 0));
const AcademicsPage = reactExports.lazy(() => __vitePreload(() => import("./index-Dacvuulg.js"), true ? __vite__mapDeps([6,1,2,3,4]) : void 0));
const NewsPage = reactExports.lazy(() => __vitePreload(() => import("./index-DN6Lu900.js"), true ? __vite__mapDeps([7,1,2,8,4]) : void 0));
const AdmissionsPage = reactExports.lazy(() => __vitePreload(() => import("./index-whNSkQgv.js"), true ? __vite__mapDeps([9,1,2,10,3]) : void 0));
const GalleryPage = reactExports.lazy(() => __vitePreload(() => import("./index-BZUSIXWW.js"), true ? __vite__mapDeps([11,1,2,4]) : void 0));
const ContactPage = reactExports.lazy(() => __vitePreload(() => import("./index-CQbFOC1M.js"), true ? __vite__mapDeps([12,1,2,10]) : void 0));
const LoginPage = reactExports.lazy(() => __vitePreload(() => import("./Login-D8mkGQx6.js"), true ? __vite__mapDeps([13,1,2,10]) : void 0));
const StudentPortal = reactExports.lazy(() => __vitePreload(() => import("./index-C-KLeZAm.js"), true ? __vite__mapDeps([14,1,2,15,16,8,17]) : void 0));
const AITutorPage = reactExports.lazy(() => __vitePreload(() => import("./AITutor-r1hnAaqx.js"), true ? __vite__mapDeps([18,1,2,15]) : void 0));
const StudentForumPage = reactExports.lazy(() => __vitePreload(() => import("./StudentForum-DWobOj1p.js"), true ? __vite__mapDeps([19,1,2,15]) : void 0));
const ParentPortal = reactExports.lazy(() => __vitePreload(() => import("./index-JodW7NUC.js"), true ? __vite__mapDeps([20,1,2,15,16,8,17]) : void 0));
const ParentForumPage = reactExports.lazy(() => __vitePreload(() => import("./ParentForum-CScvtHPS.js"), true ? __vite__mapDeps([21,1,2,15]) : void 0));
const TeacherPortal = reactExports.lazy(() => __vitePreload(() => import("./index-CaFk8Oy5.js"), true ? __vite__mapDeps([22,1,2,15,16,8,17]) : void 0));
const StaffPortal = reactExports.lazy(() => __vitePreload(() => import("./index-BLdYFn70.js"), true ? __vite__mapDeps([23,1,2,15,16,8,17]) : void 0));
const AdminDashboard = reactExports.lazy(() => __vitePreload(() => import("./index-CidPp3ds.js"), true ? __vite__mapDeps([24,1,2,15,16,8,3,17]) : void 0));
class AdminErrorBoundary extends reactExports.Component {
  constructor() {
    super(...arguments);
    __publicField(this, "state", { error: null });
  }
  static getDerivedStateFromError(error) {
    return { error };
  }
  componentDidCatch(error, info) {
    console.error("Admin dashboard render failed", error, info);
  }
  componentDidUpdate(previousProps) {
    if (previousProps.routeKey !== this.props.routeKey && this.state.error) {
      this.setState({ error: null });
    }
  }
  render() {
    if (!this.state.error) return this.props.children;
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "portal-shell flex", children: /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "flex min-h-screen items-center justify-center bg-gray-50 p-6 dark:bg-kcs-blue-950", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "w-full max-w-2xl rounded-2xl border border-red-100 bg-white p-6 shadow-xl dark:border-red-900/40 dark:bg-kcs-blue-900", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-bold uppercase tracking-wide text-red-600 dark:text-red-300", children: "Admin section error" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-2 font-display text-2xl font-bold text-kcs-blue-900 dark:text-white", children: "Cette section n'a pas pu s'afficher." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-gray-600 dark:text-gray-300", children: this.state.error.message }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          className: "mt-5 rounded-xl bg-kcs-blue-700 px-4 py-2.5 text-sm font-semibold text-white hover:bg-kcs-blue-800",
          onClick: () => this.setState({ error: null }),
          children: "Réessayer"
        }
      )
    ] }) }) });
  }
}
const AdminDashboardRoute = () => {
  const location = useLocation();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AdminErrorBoundary, { routeKey: location.pathname, children: /* @__PURE__ */ jsxRuntimeExports.jsx(AdminDashboard, {}) });
};
const PortalRedirect = () => {
  const { user, isAuthenticated } = useAuthStore();
  if (!isAuthenticated || !user) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Navigate, { to: "/login", replace: true });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Navigate, { to: user.role === "admin" ? "/admin" : `/portal/${user.role}`, replace: true });
};
const RouteFallback = () => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-[40vh]" });
const App = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(GlobalTextTranslator, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.Suspense, { fallback: /* @__PURE__ */ jsxRuntimeExports.jsx(RouteFallback, {}), children: /* @__PURE__ */ jsxRuntimeExports.jsx(Routes, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Route, { element: /* @__PURE__ */ jsxRuntimeExports.jsx(Layout, {}), children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/", element: /* @__PURE__ */ jsxRuntimeExports.jsx(HomePage, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/about", element: /* @__PURE__ */ jsxRuntimeExports.jsx(AboutPage, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/academics", element: /* @__PURE__ */ jsxRuntimeExports.jsx(AcademicsPage, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/news", element: /* @__PURE__ */ jsxRuntimeExports.jsx(NewsPage, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/news/:id", element: /* @__PURE__ */ jsxRuntimeExports.jsx(NewsPage, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/admissions", element: /* @__PURE__ */ jsxRuntimeExports.jsx(AdmissionsPage, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/gallery", element: /* @__PURE__ */ jsxRuntimeExports.jsx(GalleryPage, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/contact", element: /* @__PURE__ */ jsxRuntimeExports.jsx(ContactPage, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/privacy", element: /* @__PURE__ */ jsxRuntimeExports.jsx(ContactPage, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/terms", element: /* @__PURE__ */ jsxRuntimeExports.jsx(AboutPage, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/sitemap", element: /* @__PURE__ */ jsxRuntimeExports.jsx(HomePage, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/login", element: /* @__PURE__ */ jsxRuntimeExports.jsx(LoginPage, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Route,
        {
          path: "/portal",
          element: /* @__PURE__ */ jsxRuntimeExports.jsx(ProtectedRoute, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(PortalRedirect, {}) })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Route,
        {
          path: "/portal/notifications",
          element: /* @__PURE__ */ jsxRuntimeExports.jsx(ProtectedRoute, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(PortalRedirect, {}) })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Route,
        {
          path: "/portal/student",
          element: /* @__PURE__ */ jsxRuntimeExports.jsx(ProtectedRoute, { allowedRoles: ["student"], children: /* @__PURE__ */ jsxRuntimeExports.jsx(StudentPortal, {}) })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Route,
        {
          path: "/portal/student/dashboard",
          element: /* @__PURE__ */ jsxRuntimeExports.jsx(ProtectedRoute, { allowedRoles: ["student"], children: /* @__PURE__ */ jsxRuntimeExports.jsx(StudentPortal, {}) })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Route,
        {
          path: "/portal/student/ai-tutor",
          element: /* @__PURE__ */ jsxRuntimeExports.jsx(ProtectedRoute, { allowedRoles: ["student"], children: /* @__PURE__ */ jsxRuntimeExports.jsx(AITutorPage, {}) })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Route,
        {
          path: "/portal/student/forum",
          element: /* @__PURE__ */ jsxRuntimeExports.jsx(ProtectedRoute, { allowedRoles: ["student", "admin"], children: /* @__PURE__ */ jsxRuntimeExports.jsx(StudentForumPage, {}) })
        }
      ),
      ["grades", "assignments", "timetable", "messages", "profile"].map((segment) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        Route,
        {
          path: `/portal/student/${segment}`,
          element: /* @__PURE__ */ jsxRuntimeExports.jsx(ProtectedRoute, { allowedRoles: ["student"], children: /* @__PURE__ */ jsxRuntimeExports.jsx(StudentPortal, {}) })
        },
        segment
      )),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Route,
        {
          path: "/portal/student/*",
          element: /* @__PURE__ */ jsxRuntimeExports.jsx(ProtectedRoute, { allowedRoles: ["student"], children: /* @__PURE__ */ jsxRuntimeExports.jsx(StudentPortal, {}) })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Route,
        {
          path: "/portal/parent",
          element: /* @__PURE__ */ jsxRuntimeExports.jsx(ProtectedRoute, { allowedRoles: ["parent"], children: /* @__PURE__ */ jsxRuntimeExports.jsx(ParentPortal, {}) })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Route,
        {
          path: "/portal/parent/dashboard",
          element: /* @__PURE__ */ jsxRuntimeExports.jsx(ProtectedRoute, { allowedRoles: ["parent"], children: /* @__PURE__ */ jsxRuntimeExports.jsx(ParentPortal, {}) })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Route,
        {
          path: "/portal/parent/forum",
          element: /* @__PURE__ */ jsxRuntimeExports.jsx(ProtectedRoute, { allowedRoles: ["parent", "admin"], children: /* @__PURE__ */ jsxRuntimeExports.jsx(ParentForumPage, {}) })
        }
      ),
      ["performance", "messages", "calendar", "profile", "grades", "finance"].map((segment) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        Route,
        {
          path: `/portal/parent/${segment}`,
          element: /* @__PURE__ */ jsxRuntimeExports.jsx(ProtectedRoute, { allowedRoles: ["parent"], children: /* @__PURE__ */ jsxRuntimeExports.jsx(ParentPortal, {}) })
        },
        segment
      )),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Route,
        {
          path: "/portal/parent/*",
          element: /* @__PURE__ */ jsxRuntimeExports.jsx(ProtectedRoute, { allowedRoles: ["parent"], children: /* @__PURE__ */ jsxRuntimeExports.jsx(ParentPortal, {}) })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Route,
        {
          path: "/portal/teacher",
          element: /* @__PURE__ */ jsxRuntimeExports.jsx(ProtectedRoute, { allowedRoles: ["teacher"], children: /* @__PURE__ */ jsxRuntimeExports.jsx(TeacherPortal, {}) })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Route,
        {
          path: "/portal/teacher/dashboard",
          element: /* @__PURE__ */ jsxRuntimeExports.jsx(ProtectedRoute, { allowedRoles: ["teacher"], children: /* @__PURE__ */ jsxRuntimeExports.jsx(TeacherPortal, {}) })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/portal/teacher/report-card", element: /* @__PURE__ */ jsxRuntimeExports.jsx(Navigate, { to: "/portal/teacher/grades", replace: true }) }),
      ["courses", "students", "attendance", "assignments", "grades", "reports", "discipline", "messages"].map((segment) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        Route,
        {
          path: `/portal/teacher/${segment}`,
          element: /* @__PURE__ */ jsxRuntimeExports.jsx(ProtectedRoute, { allowedRoles: ["teacher"], children: /* @__PURE__ */ jsxRuntimeExports.jsx(TeacherPortal, {}) })
        },
        segment
      )),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Route,
        {
          path: "/portal/teacher/*",
          element: /* @__PURE__ */ jsxRuntimeExports.jsx(ProtectedRoute, { allowedRoles: ["teacher"], children: /* @__PURE__ */ jsxRuntimeExports.jsx(TeacherPortal, {}) })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Route,
        {
          path: "/portal/staff",
          element: /* @__PURE__ */ jsxRuntimeExports.jsx(ProtectedRoute, { allowedRoles: ["staff"], children: /* @__PURE__ */ jsxRuntimeExports.jsx(StaffPortal, {}) })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Route,
        {
          path: "/portal/staff/dashboard",
          element: /* @__PURE__ */ jsxRuntimeExports.jsx(ProtectedRoute, { allowedRoles: ["staff"], children: /* @__PURE__ */ jsxRuntimeExports.jsx(StaffPortal, {}) })
        }
      ),
      ["records", "admissions", "announcements", "reports", "finance", "messages", "permissions"].map((segment) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        Route,
        {
          path: `/portal/staff/${segment}`,
          element: /* @__PURE__ */ jsxRuntimeExports.jsx(ProtectedRoute, { allowedRoles: ["staff"], children: /* @__PURE__ */ jsxRuntimeExports.jsx(StaffPortal, {}) })
        },
        segment
      )),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Route,
        {
          path: "/portal/staff/*",
          element: /* @__PURE__ */ jsxRuntimeExports.jsx(ProtectedRoute, { allowedRoles: ["staff"], children: /* @__PURE__ */ jsxRuntimeExports.jsx(StaffPortal, {}) })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Route,
        {
          path: "/admin",
          element: /* @__PURE__ */ jsxRuntimeExports.jsx(ProtectedRoute, { allowedRoles: ["admin"], children: /* @__PURE__ */ jsxRuntimeExports.jsx(AdminDashboardRoute, {}) })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/portal/admin", element: /* @__PURE__ */ jsxRuntimeExports.jsx(Navigate, { to: "/admin", replace: true }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/admin/dashboard", element: /* @__PURE__ */ jsxRuntimeExports.jsx(Navigate, { to: "/admin", replace: true }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Route,
        {
          path: "/admin/*",
          element: /* @__PURE__ */ jsxRuntimeExports.jsx(ProtectedRoute, { allowedRoles: ["admin"], children: /* @__PURE__ */ jsxRuntimeExports.jsx(AdminDashboardRoute, {}) })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "*", element: /* @__PURE__ */ jsxRuntimeExports.jsx(Navigate, { to: "/", replace: true }) })
    ] }) }) })
  ] });
};
const isString = (obj) => typeof obj === "string";
const defer = () => {
  let res;
  let rej;
  const promise = new Promise((resolve, reject) => {
    res = resolve;
    rej = reject;
  });
  promise.resolve = res;
  promise.reject = rej;
  return promise;
};
const makeString = (object) => {
  if (object == null) return "";
  return "" + object;
};
const copy = (a, s, t) => {
  a.forEach((m2) => {
    if (s[m2]) t[m2] = s[m2];
  });
};
const lastOfPathSeparatorRegExp = /###/g;
const cleanKey = (key) => key && key.indexOf("###") > -1 ? key.replace(lastOfPathSeparatorRegExp, ".") : key;
const canNotTraverseDeeper = (object) => !object || isString(object);
const getLastOfPath = (object, path, Empty) => {
  const stack = !isString(path) ? path : path.split(".");
  let stackIndex = 0;
  while (stackIndex < stack.length - 1) {
    if (canNotTraverseDeeper(object)) return {};
    const key = cleanKey(stack[stackIndex]);
    if (!object[key] && Empty) object[key] = new Empty();
    if (Object.prototype.hasOwnProperty.call(object, key)) {
      object = object[key];
    } else {
      object = {};
    }
    ++stackIndex;
  }
  if (canNotTraverseDeeper(object)) return {};
  return {
    obj: object,
    k: cleanKey(stack[stackIndex])
  };
};
const setPath = (object, path, newValue) => {
  const {
    obj,
    k
  } = getLastOfPath(object, path, Object);
  if (obj !== void 0 || path.length === 1) {
    obj[k] = newValue;
    return;
  }
  let e = path[path.length - 1];
  let p = path.slice(0, path.length - 1);
  let last = getLastOfPath(object, p, Object);
  while (last.obj === void 0 && p.length) {
    e = `${p[p.length - 1]}.${e}`;
    p = p.slice(0, p.length - 1);
    last = getLastOfPath(object, p, Object);
    if (last && last.obj && typeof last.obj[`${last.k}.${e}`] !== "undefined") {
      last.obj = void 0;
    }
  }
  last.obj[`${last.k}.${e}`] = newValue;
};
const pushPath = (object, path, newValue, concat) => {
  const {
    obj,
    k
  } = getLastOfPath(object, path, Object);
  obj[k] = obj[k] || [];
  obj[k].push(newValue);
};
const getPath = (object, path) => {
  const {
    obj,
    k
  } = getLastOfPath(object, path);
  if (!obj) return void 0;
  return obj[k];
};
const getPathWithDefaults = (data, defaultData, key) => {
  const value = getPath(data, key);
  if (value !== void 0) {
    return value;
  }
  return getPath(defaultData, key);
};
const deepExtend = (target, source, overwrite) => {
  for (const prop in source) {
    if (prop !== "__proto__" && prop !== "constructor") {
      if (prop in target) {
        if (isString(target[prop]) || target[prop] instanceof String || isString(source[prop]) || source[prop] instanceof String) {
          if (overwrite) target[prop] = source[prop];
        } else {
          deepExtend(target[prop], source[prop], overwrite);
        }
      } else {
        target[prop] = source[prop];
      }
    }
  }
  return target;
};
const regexEscape = (str) => str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
var _entityMap = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
  "/": "&#x2F;"
};
const escape = (data) => {
  if (isString(data)) {
    return data.replace(/[&<>"'\/]/g, (s) => _entityMap[s]);
  }
  return data;
};
class RegExpCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.regExpMap = /* @__PURE__ */ new Map();
    this.regExpQueue = [];
  }
  getRegExp(pattern) {
    const regExpFromCache = this.regExpMap.get(pattern);
    if (regExpFromCache !== void 0) {
      return regExpFromCache;
    }
    const regExpNew = new RegExp(pattern);
    if (this.regExpQueue.length === this.capacity) {
      this.regExpMap.delete(this.regExpQueue.shift());
    }
    this.regExpMap.set(pattern, regExpNew);
    this.regExpQueue.push(pattern);
    return regExpNew;
  }
}
const chars = [" ", ",", "?", "!", ";"];
const looksLikeObjectPathRegExpCache = new RegExpCache(20);
const looksLikeObjectPath = (key, nsSeparator, keySeparator) => {
  nsSeparator = nsSeparator || "";
  keySeparator = keySeparator || "";
  const possibleChars = chars.filter((c) => nsSeparator.indexOf(c) < 0 && keySeparator.indexOf(c) < 0);
  if (possibleChars.length === 0) return true;
  const r = looksLikeObjectPathRegExpCache.getRegExp(`(${possibleChars.map((c) => c === "?" ? "\\?" : c).join("|")})`);
  let matched = !r.test(key);
  if (!matched) {
    const ki = key.indexOf(keySeparator);
    if (ki > 0 && !r.test(key.substring(0, ki))) {
      matched = true;
    }
  }
  return matched;
};
const deepFind = function(obj, path) {
  let keySeparator = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : ".";
  if (!obj) return void 0;
  if (obj[path]) return obj[path];
  const tokens = path.split(keySeparator);
  let current = obj;
  for (let i = 0; i < tokens.length; ) {
    if (!current || typeof current !== "object") {
      return void 0;
    }
    let next;
    let nextPath = "";
    for (let j = i; j < tokens.length; ++j) {
      if (j !== i) {
        nextPath += keySeparator;
      }
      nextPath += tokens[j];
      next = current[nextPath];
      if (next !== void 0) {
        if (["string", "number", "boolean"].indexOf(typeof next) > -1 && j < tokens.length - 1) {
          continue;
        }
        i += j - i + 1;
        break;
      }
    }
    current = next;
  }
  return current;
};
const getCleanedCode = (code) => code && code.replace("_", "-");
const consoleLogger = {
  type: "logger",
  log(args) {
    this.output("log", args);
  },
  warn(args) {
    this.output("warn", args);
  },
  error(args) {
    this.output("error", args);
  },
  output(type, args) {
    if (console && console[type]) console[type].apply(console, args);
  }
};
class Logger {
  constructor(concreteLogger) {
    let options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.init(concreteLogger, options);
  }
  init(concreteLogger) {
    let options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.prefix = options.prefix || "i18next:";
    this.logger = concreteLogger || consoleLogger;
    this.options = options;
    this.debug = options.debug;
  }
  log() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return this.forward(args, "log", "", true);
  }
  warn() {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }
    return this.forward(args, "warn", "", true);
  }
  error() {
    for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }
    return this.forward(args, "error", "");
  }
  deprecate() {
    for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
      args[_key4] = arguments[_key4];
    }
    return this.forward(args, "warn", "WARNING DEPRECATED: ", true);
  }
  forward(args, lvl, prefix, debugOnly) {
    if (debugOnly && !this.debug) return null;
    if (isString(args[0])) args[0] = `${prefix}${this.prefix} ${args[0]}`;
    return this.logger[lvl](args);
  }
  create(moduleName) {
    return new Logger(this.logger, {
      ...{
        prefix: `${this.prefix}:${moduleName}:`
      },
      ...this.options
    });
  }
  clone(options) {
    options = options || this.options;
    options.prefix = options.prefix || this.prefix;
    return new Logger(this.logger, options);
  }
}
var baseLogger = new Logger();
class EventEmitter {
  constructor() {
    this.observers = {};
  }
  on(events, listener) {
    events.split(" ").forEach((event) => {
      if (!this.observers[event]) this.observers[event] = /* @__PURE__ */ new Map();
      const numListeners = this.observers[event].get(listener) || 0;
      this.observers[event].set(listener, numListeners + 1);
    });
    return this;
  }
  off(event, listener) {
    if (!this.observers[event]) return;
    if (!listener) {
      delete this.observers[event];
      return;
    }
    this.observers[event].delete(listener);
  }
  emit(event) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }
    if (this.observers[event]) {
      const cloned = Array.from(this.observers[event].entries());
      cloned.forEach((_ref) => {
        let [observer, numTimesAdded] = _ref;
        for (let i = 0; i < numTimesAdded; i++) {
          observer(...args);
        }
      });
    }
    if (this.observers["*"]) {
      const cloned = Array.from(this.observers["*"].entries());
      cloned.forEach((_ref2) => {
        let [observer, numTimesAdded] = _ref2;
        for (let i = 0; i < numTimesAdded; i++) {
          observer.apply(observer, [event, ...args]);
        }
      });
    }
  }
}
class ResourceStore extends EventEmitter {
  constructor(data) {
    let options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
      ns: ["translation"],
      defaultNS: "translation"
    };
    super();
    this.data = data || {};
    this.options = options;
    if (this.options.keySeparator === void 0) {
      this.options.keySeparator = ".";
    }
    if (this.options.ignoreJSONStructure === void 0) {
      this.options.ignoreJSONStructure = true;
    }
  }
  addNamespaces(ns) {
    if (this.options.ns.indexOf(ns) < 0) {
      this.options.ns.push(ns);
    }
  }
  removeNamespaces(ns) {
    const index = this.options.ns.indexOf(ns);
    if (index > -1) {
      this.options.ns.splice(index, 1);
    }
  }
  getResource(lng, ns, key) {
    let options = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    const keySeparator = options.keySeparator !== void 0 ? options.keySeparator : this.options.keySeparator;
    const ignoreJSONStructure = options.ignoreJSONStructure !== void 0 ? options.ignoreJSONStructure : this.options.ignoreJSONStructure;
    let path;
    if (lng.indexOf(".") > -1) {
      path = lng.split(".");
    } else {
      path = [lng, ns];
      if (key) {
        if (Array.isArray(key)) {
          path.push(...key);
        } else if (isString(key) && keySeparator) {
          path.push(...key.split(keySeparator));
        } else {
          path.push(key);
        }
      }
    }
    const result = getPath(this.data, path);
    if (!result && !ns && !key && lng.indexOf(".") > -1) {
      lng = path[0];
      ns = path[1];
      key = path.slice(2).join(".");
    }
    if (result || !ignoreJSONStructure || !isString(key)) return result;
    return deepFind(this.data && this.data[lng] && this.data[lng][ns], key, keySeparator);
  }
  addResource(lng, ns, key, value) {
    let options = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : {
      silent: false
    };
    const keySeparator = options.keySeparator !== void 0 ? options.keySeparator : this.options.keySeparator;
    let path = [lng, ns];
    if (key) path = path.concat(keySeparator ? key.split(keySeparator) : key);
    if (lng.indexOf(".") > -1) {
      path = lng.split(".");
      value = ns;
      ns = path[1];
    }
    this.addNamespaces(ns);
    setPath(this.data, path, value);
    if (!options.silent) this.emit("added", lng, ns, key, value);
  }
  addResources(lng, ns, resources) {
    let options = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {
      silent: false
    };
    for (const m2 in resources) {
      if (isString(resources[m2]) || Array.isArray(resources[m2])) this.addResource(lng, ns, m2, resources[m2], {
        silent: true
      });
    }
    if (!options.silent) this.emit("added", lng, ns, resources);
  }
  addResourceBundle(lng, ns, resources, deep, overwrite) {
    let options = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {
      silent: false,
      skipCopy: false
    };
    let path = [lng, ns];
    if (lng.indexOf(".") > -1) {
      path = lng.split(".");
      deep = resources;
      resources = ns;
      ns = path[1];
    }
    this.addNamespaces(ns);
    let pack = getPath(this.data, path) || {};
    if (!options.skipCopy) resources = JSON.parse(JSON.stringify(resources));
    if (deep) {
      deepExtend(pack, resources, overwrite);
    } else {
      pack = {
        ...pack,
        ...resources
      };
    }
    setPath(this.data, path, pack);
    if (!options.silent) this.emit("added", lng, ns, resources);
  }
  removeResourceBundle(lng, ns) {
    if (this.hasResourceBundle(lng, ns)) {
      delete this.data[lng][ns];
    }
    this.removeNamespaces(ns);
    this.emit("removed", lng, ns);
  }
  hasResourceBundle(lng, ns) {
    return this.getResource(lng, ns) !== void 0;
  }
  getResourceBundle(lng, ns) {
    if (!ns) ns = this.options.defaultNS;
    if (this.options.compatibilityAPI === "v1") return {
      ...{},
      ...this.getResource(lng, ns)
    };
    return this.getResource(lng, ns);
  }
  getDataByLanguage(lng) {
    return this.data[lng];
  }
  hasLanguageSomeTranslations(lng) {
    const data = this.getDataByLanguage(lng);
    const n = data && Object.keys(data) || [];
    return !!n.find((v) => data[v] && Object.keys(data[v]).length > 0);
  }
  toJSON() {
    return this.data;
  }
}
var postProcessor = {
  processors: {},
  addPostProcessor(module) {
    this.processors[module.name] = module;
  },
  handle(processors, value, key, options, translator) {
    processors.forEach((processor) => {
      if (this.processors[processor]) value = this.processors[processor].process(value, key, options, translator);
    });
    return value;
  }
};
const checkedLoadedFor = {};
class Translator extends EventEmitter {
  constructor(services) {
    let options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    super();
    copy(["resourceStore", "languageUtils", "pluralResolver", "interpolator", "backendConnector", "i18nFormat", "utils"], services, this);
    this.options = options;
    if (this.options.keySeparator === void 0) {
      this.options.keySeparator = ".";
    }
    this.logger = baseLogger.create("translator");
  }
  changeLanguage(lng) {
    if (lng) this.language = lng;
  }
  exists(key) {
    let options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
      interpolation: {}
    };
    if (key === void 0 || key === null) {
      return false;
    }
    const resolved = this.resolve(key, options);
    return resolved && resolved.res !== void 0;
  }
  extractFromKey(key, options) {
    let nsSeparator = options.nsSeparator !== void 0 ? options.nsSeparator : this.options.nsSeparator;
    if (nsSeparator === void 0) nsSeparator = ":";
    const keySeparator = options.keySeparator !== void 0 ? options.keySeparator : this.options.keySeparator;
    let namespaces = options.ns || this.options.defaultNS || [];
    const wouldCheckForNsInKey = nsSeparator && key.indexOf(nsSeparator) > -1;
    const seemsNaturalLanguage = !this.options.userDefinedKeySeparator && !options.keySeparator && !this.options.userDefinedNsSeparator && !options.nsSeparator && !looksLikeObjectPath(key, nsSeparator, keySeparator);
    if (wouldCheckForNsInKey && !seemsNaturalLanguage) {
      const m2 = key.match(this.interpolator.nestingRegexp);
      if (m2 && m2.length > 0) {
        return {
          key,
          namespaces: isString(namespaces) ? [namespaces] : namespaces
        };
      }
      const parts = key.split(nsSeparator);
      if (nsSeparator !== keySeparator || nsSeparator === keySeparator && this.options.ns.indexOf(parts[0]) > -1) namespaces = parts.shift();
      key = parts.join(keySeparator);
    }
    return {
      key,
      namespaces: isString(namespaces) ? [namespaces] : namespaces
    };
  }
  translate(keys, options, lastKey) {
    if (typeof options !== "object" && this.options.overloadTranslationOptionHandler) {
      options = this.options.overloadTranslationOptionHandler(arguments);
    }
    if (typeof options === "object") options = {
      ...options
    };
    if (!options) options = {};
    if (keys === void 0 || keys === null) return "";
    if (!Array.isArray(keys)) keys = [String(keys)];
    const returnDetails = options.returnDetails !== void 0 ? options.returnDetails : this.options.returnDetails;
    const keySeparator = options.keySeparator !== void 0 ? options.keySeparator : this.options.keySeparator;
    const {
      key,
      namespaces
    } = this.extractFromKey(keys[keys.length - 1], options);
    const namespace = namespaces[namespaces.length - 1];
    const lng = options.lng || this.language;
    const appendNamespaceToCIMode = options.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
    if (lng && lng.toLowerCase() === "cimode") {
      if (appendNamespaceToCIMode) {
        const nsSeparator = options.nsSeparator || this.options.nsSeparator;
        if (returnDetails) {
          return {
            res: `${namespace}${nsSeparator}${key}`,
            usedKey: key,
            exactUsedKey: key,
            usedLng: lng,
            usedNS: namespace,
            usedParams: this.getUsedParamsDetails(options)
          };
        }
        return `${namespace}${nsSeparator}${key}`;
      }
      if (returnDetails) {
        return {
          res: key,
          usedKey: key,
          exactUsedKey: key,
          usedLng: lng,
          usedNS: namespace,
          usedParams: this.getUsedParamsDetails(options)
        };
      }
      return key;
    }
    const resolved = this.resolve(keys, options);
    let res = resolved && resolved.res;
    const resUsedKey = resolved && resolved.usedKey || key;
    const resExactUsedKey = resolved && resolved.exactUsedKey || key;
    const resType = Object.prototype.toString.apply(res);
    const noObject = ["[object Number]", "[object Function]", "[object RegExp]"];
    const joinArrays = options.joinArrays !== void 0 ? options.joinArrays : this.options.joinArrays;
    const handleAsObjectInI18nFormat = !this.i18nFormat || this.i18nFormat.handleAsObject;
    const handleAsObject = !isString(res) && typeof res !== "boolean" && typeof res !== "number";
    if (handleAsObjectInI18nFormat && res && handleAsObject && noObject.indexOf(resType) < 0 && !(isString(joinArrays) && Array.isArray(res))) {
      if (!options.returnObjects && !this.options.returnObjects) {
        if (!this.options.returnedObjectHandler) {
          this.logger.warn("accessing an object - but returnObjects options is not enabled!");
        }
        const r = this.options.returnedObjectHandler ? this.options.returnedObjectHandler(resUsedKey, res, {
          ...options,
          ns: namespaces
        }) : `key '${key} (${this.language})' returned an object instead of string.`;
        if (returnDetails) {
          resolved.res = r;
          resolved.usedParams = this.getUsedParamsDetails(options);
          return resolved;
        }
        return r;
      }
      if (keySeparator) {
        const resTypeIsArray = Array.isArray(res);
        const copy2 = resTypeIsArray ? [] : {};
        const newKeyToUse = resTypeIsArray ? resExactUsedKey : resUsedKey;
        for (const m2 in res) {
          if (Object.prototype.hasOwnProperty.call(res, m2)) {
            const deepKey = `${newKeyToUse}${keySeparator}${m2}`;
            copy2[m2] = this.translate(deepKey, {
              ...options,
              ...{
                joinArrays: false,
                ns: namespaces
              }
            });
            if (copy2[m2] === deepKey) copy2[m2] = res[m2];
          }
        }
        res = copy2;
      }
    } else if (handleAsObjectInI18nFormat && isString(joinArrays) && Array.isArray(res)) {
      res = res.join(joinArrays);
      if (res) res = this.extendTranslation(res, keys, options, lastKey);
    } else {
      let usedDefault = false;
      let usedKey = false;
      const needsPluralHandling = options.count !== void 0 && !isString(options.count);
      const hasDefaultValue = Translator.hasDefaultValue(options);
      const defaultValueSuffix = needsPluralHandling ? this.pluralResolver.getSuffix(lng, options.count, options) : "";
      const defaultValueSuffixOrdinalFallback = options.ordinal && needsPluralHandling ? this.pluralResolver.getSuffix(lng, options.count, {
        ordinal: false
      }) : "";
      const needsZeroSuffixLookup = needsPluralHandling && !options.ordinal && options.count === 0 && this.pluralResolver.shouldUseIntlApi();
      const defaultValue = needsZeroSuffixLookup && options[`defaultValue${this.options.pluralSeparator}zero`] || options[`defaultValue${defaultValueSuffix}`] || options[`defaultValue${defaultValueSuffixOrdinalFallback}`] || options.defaultValue;
      if (!this.isValidLookup(res) && hasDefaultValue) {
        usedDefault = true;
        res = defaultValue;
      }
      if (!this.isValidLookup(res)) {
        usedKey = true;
        res = key;
      }
      const missingKeyNoValueFallbackToKey = options.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey;
      const resForMissing = missingKeyNoValueFallbackToKey && usedKey ? void 0 : res;
      const updateMissing = hasDefaultValue && defaultValue !== res && this.options.updateMissing;
      if (usedKey || usedDefault || updateMissing) {
        this.logger.log(updateMissing ? "updateKey" : "missingKey", lng, namespace, key, updateMissing ? defaultValue : res);
        if (keySeparator) {
          const fk = this.resolve(key, {
            ...options,
            keySeparator: false
          });
          if (fk && fk.res) this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.");
        }
        let lngs = [];
        const fallbackLngs = this.languageUtils.getFallbackCodes(this.options.fallbackLng, options.lng || this.language);
        if (this.options.saveMissingTo === "fallback" && fallbackLngs && fallbackLngs[0]) {
          for (let i = 0; i < fallbackLngs.length; i++) {
            lngs.push(fallbackLngs[i]);
          }
        } else if (this.options.saveMissingTo === "all") {
          lngs = this.languageUtils.toResolveHierarchy(options.lng || this.language);
        } else {
          lngs.push(options.lng || this.language);
        }
        const send = (l, k, specificDefaultValue) => {
          const defaultForMissing = hasDefaultValue && specificDefaultValue !== res ? specificDefaultValue : resForMissing;
          if (this.options.missingKeyHandler) {
            this.options.missingKeyHandler(l, namespace, k, defaultForMissing, updateMissing, options);
          } else if (this.backendConnector && this.backendConnector.saveMissing) {
            this.backendConnector.saveMissing(l, namespace, k, defaultForMissing, updateMissing, options);
          }
          this.emit("missingKey", l, namespace, k, res);
        };
        if (this.options.saveMissing) {
          if (this.options.saveMissingPlurals && needsPluralHandling) {
            lngs.forEach((language) => {
              const suffixes = this.pluralResolver.getSuffixes(language, options);
              if (needsZeroSuffixLookup && options[`defaultValue${this.options.pluralSeparator}zero`] && suffixes.indexOf(`${this.options.pluralSeparator}zero`) < 0) {
                suffixes.push(`${this.options.pluralSeparator}zero`);
              }
              suffixes.forEach((suffix) => {
                send([language], key + suffix, options[`defaultValue${suffix}`] || defaultValue);
              });
            });
          } else {
            send(lngs, key, defaultValue);
          }
        }
      }
      res = this.extendTranslation(res, keys, options, resolved, lastKey);
      if (usedKey && res === key && this.options.appendNamespaceToMissingKey) res = `${namespace}:${key}`;
      if ((usedKey || usedDefault) && this.options.parseMissingKeyHandler) {
        if (this.options.compatibilityAPI !== "v1") {
          res = this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey ? `${namespace}:${key}` : key, usedDefault ? res : void 0);
        } else {
          res = this.options.parseMissingKeyHandler(res);
        }
      }
    }
    if (returnDetails) {
      resolved.res = res;
      resolved.usedParams = this.getUsedParamsDetails(options);
      return resolved;
    }
    return res;
  }
  extendTranslation(res, key, options, resolved, lastKey) {
    var _this = this;
    if (this.i18nFormat && this.i18nFormat.parse) {
      res = this.i18nFormat.parse(res, {
        ...this.options.interpolation.defaultVariables,
        ...options
      }, options.lng || this.language || resolved.usedLng, resolved.usedNS, resolved.usedKey, {
        resolved
      });
    } else if (!options.skipInterpolation) {
      if (options.interpolation) this.interpolator.init({
        ...options,
        ...{
          interpolation: {
            ...this.options.interpolation,
            ...options.interpolation
          }
        }
      });
      const skipOnVariables = isString(res) && (options && options.interpolation && options.interpolation.skipOnVariables !== void 0 ? options.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables);
      let nestBef;
      if (skipOnVariables) {
        const nb = res.match(this.interpolator.nestingRegexp);
        nestBef = nb && nb.length;
      }
      let data = options.replace && !isString(options.replace) ? options.replace : options;
      if (this.options.interpolation.defaultVariables) data = {
        ...this.options.interpolation.defaultVariables,
        ...data
      };
      res = this.interpolator.interpolate(res, data, options.lng || this.language || resolved.usedLng, options);
      if (skipOnVariables) {
        const na = res.match(this.interpolator.nestingRegexp);
        const nestAft = na && na.length;
        if (nestBef < nestAft) options.nest = false;
      }
      if (!options.lng && this.options.compatibilityAPI !== "v1" && resolved && resolved.res) options.lng = this.language || resolved.usedLng;
      if (options.nest !== false) res = this.interpolator.nest(res, function() {
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        if (lastKey && lastKey[0] === args[0] && !options.context) {
          _this.logger.warn(`It seems you are nesting recursively key: ${args[0]} in key: ${key[0]}`);
          return null;
        }
        return _this.translate(...args, key);
      }, options);
      if (options.interpolation) this.interpolator.reset();
    }
    const postProcess = options.postProcess || this.options.postProcess;
    const postProcessorNames = isString(postProcess) ? [postProcess] : postProcess;
    if (res !== void 0 && res !== null && postProcessorNames && postProcessorNames.length && options.applyPostProcessor !== false) {
      res = postProcessor.handle(postProcessorNames, res, key, this.options && this.options.postProcessPassResolved ? {
        i18nResolved: {
          ...resolved,
          usedParams: this.getUsedParamsDetails(options)
        },
        ...options
      } : options, this);
    }
    return res;
  }
  resolve(keys) {
    let options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    let found;
    let usedKey;
    let exactUsedKey;
    let usedLng;
    let usedNS;
    if (isString(keys)) keys = [keys];
    keys.forEach((k) => {
      if (this.isValidLookup(found)) return;
      const extracted = this.extractFromKey(k, options);
      const key = extracted.key;
      usedKey = key;
      let namespaces = extracted.namespaces;
      if (this.options.fallbackNS) namespaces = namespaces.concat(this.options.fallbackNS);
      const needsPluralHandling = options.count !== void 0 && !isString(options.count);
      const needsZeroSuffixLookup = needsPluralHandling && !options.ordinal && options.count === 0 && this.pluralResolver.shouldUseIntlApi();
      const needsContextHandling = options.context !== void 0 && (isString(options.context) || typeof options.context === "number") && options.context !== "";
      const codes = options.lngs ? options.lngs : this.languageUtils.toResolveHierarchy(options.lng || this.language, options.fallbackLng);
      namespaces.forEach((ns) => {
        if (this.isValidLookup(found)) return;
        usedNS = ns;
        if (!checkedLoadedFor[`${codes[0]}-${ns}`] && this.utils && this.utils.hasLoadedNamespace && !this.utils.hasLoadedNamespace(usedNS)) {
          checkedLoadedFor[`${codes[0]}-${ns}`] = true;
          this.logger.warn(`key "${usedKey}" for languages "${codes.join(", ")}" won't get resolved as namespace "${usedNS}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");
        }
        codes.forEach((code) => {
          if (this.isValidLookup(found)) return;
          usedLng = code;
          const finalKeys = [key];
          if (this.i18nFormat && this.i18nFormat.addLookupKeys) {
            this.i18nFormat.addLookupKeys(finalKeys, key, code, ns, options);
          } else {
            let pluralSuffix;
            if (needsPluralHandling) pluralSuffix = this.pluralResolver.getSuffix(code, options.count, options);
            const zeroSuffix = `${this.options.pluralSeparator}zero`;
            const ordinalPrefix = `${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;
            if (needsPluralHandling) {
              finalKeys.push(key + pluralSuffix);
              if (options.ordinal && pluralSuffix.indexOf(ordinalPrefix) === 0) {
                finalKeys.push(key + pluralSuffix.replace(ordinalPrefix, this.options.pluralSeparator));
              }
              if (needsZeroSuffixLookup) {
                finalKeys.push(key + zeroSuffix);
              }
            }
            if (needsContextHandling) {
              const contextKey = `${key}${this.options.contextSeparator}${options.context}`;
              finalKeys.push(contextKey);
              if (needsPluralHandling) {
                finalKeys.push(contextKey + pluralSuffix);
                if (options.ordinal && pluralSuffix.indexOf(ordinalPrefix) === 0) {
                  finalKeys.push(contextKey + pluralSuffix.replace(ordinalPrefix, this.options.pluralSeparator));
                }
                if (needsZeroSuffixLookup) {
                  finalKeys.push(contextKey + zeroSuffix);
                }
              }
            }
          }
          let possibleKey;
          while (possibleKey = finalKeys.pop()) {
            if (!this.isValidLookup(found)) {
              exactUsedKey = possibleKey;
              found = this.getResource(code, ns, possibleKey, options);
            }
          }
        });
      });
    });
    return {
      res: found,
      usedKey,
      exactUsedKey,
      usedLng,
      usedNS
    };
  }
  isValidLookup(res) {
    return res !== void 0 && !(!this.options.returnNull && res === null) && !(!this.options.returnEmptyString && res === "");
  }
  getResource(code, ns, key) {
    let options = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    if (this.i18nFormat && this.i18nFormat.getResource) return this.i18nFormat.getResource(code, ns, key, options);
    return this.resourceStore.getResource(code, ns, key, options);
  }
  getUsedParamsDetails() {
    let options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const optionsKeys = ["defaultValue", "ordinal", "context", "replace", "lng", "lngs", "fallbackLng", "ns", "keySeparator", "nsSeparator", "returnObjects", "returnDetails", "joinArrays", "postProcess", "interpolation"];
    const useOptionsReplaceForData = options.replace && !isString(options.replace);
    let data = useOptionsReplaceForData ? options.replace : options;
    if (useOptionsReplaceForData && typeof options.count !== "undefined") {
      data.count = options.count;
    }
    if (this.options.interpolation.defaultVariables) {
      data = {
        ...this.options.interpolation.defaultVariables,
        ...data
      };
    }
    if (!useOptionsReplaceForData) {
      data = {
        ...data
      };
      for (const key of optionsKeys) {
        delete data[key];
      }
    }
    return data;
  }
  static hasDefaultValue(options) {
    const prefix = "defaultValue";
    for (const option in options) {
      if (Object.prototype.hasOwnProperty.call(options, option) && prefix === option.substring(0, prefix.length) && void 0 !== options[option]) {
        return true;
      }
    }
    return false;
  }
}
const capitalize = (string) => string.charAt(0).toUpperCase() + string.slice(1);
class LanguageUtil {
  constructor(options) {
    this.options = options;
    this.supportedLngs = this.options.supportedLngs || false;
    this.logger = baseLogger.create("languageUtils");
  }
  getScriptPartFromCode(code) {
    code = getCleanedCode(code);
    if (!code || code.indexOf("-") < 0) return null;
    const p = code.split("-");
    if (p.length === 2) return null;
    p.pop();
    if (p[p.length - 1].toLowerCase() === "x") return null;
    return this.formatLanguageCode(p.join("-"));
  }
  getLanguagePartFromCode(code) {
    code = getCleanedCode(code);
    if (!code || code.indexOf("-") < 0) return code;
    const p = code.split("-");
    return this.formatLanguageCode(p[0]);
  }
  formatLanguageCode(code) {
    if (isString(code) && code.indexOf("-") > -1) {
      if (typeof Intl !== "undefined" && typeof Intl.getCanonicalLocales !== "undefined") {
        try {
          let formattedCode = Intl.getCanonicalLocales(code)[0];
          if (formattedCode && this.options.lowerCaseLng) {
            formattedCode = formattedCode.toLowerCase();
          }
          if (formattedCode) return formattedCode;
        } catch (e) {
        }
      }
      const specialCases = ["hans", "hant", "latn", "cyrl", "cans", "mong", "arab"];
      let p = code.split("-");
      if (this.options.lowerCaseLng) {
        p = p.map((part) => part.toLowerCase());
      } else if (p.length === 2) {
        p[0] = p[0].toLowerCase();
        p[1] = p[1].toUpperCase();
        if (specialCases.indexOf(p[1].toLowerCase()) > -1) p[1] = capitalize(p[1].toLowerCase());
      } else if (p.length === 3) {
        p[0] = p[0].toLowerCase();
        if (p[1].length === 2) p[1] = p[1].toUpperCase();
        if (p[0] !== "sgn" && p[2].length === 2) p[2] = p[2].toUpperCase();
        if (specialCases.indexOf(p[1].toLowerCase()) > -1) p[1] = capitalize(p[1].toLowerCase());
        if (specialCases.indexOf(p[2].toLowerCase()) > -1) p[2] = capitalize(p[2].toLowerCase());
      }
      return p.join("-");
    }
    return this.options.cleanCode || this.options.lowerCaseLng ? code.toLowerCase() : code;
  }
  isSupportedCode(code) {
    if (this.options.load === "languageOnly" || this.options.nonExplicitSupportedLngs) {
      code = this.getLanguagePartFromCode(code);
    }
    return !this.supportedLngs || !this.supportedLngs.length || this.supportedLngs.indexOf(code) > -1;
  }
  getBestMatchFromCodes(codes) {
    if (!codes) return null;
    let found;
    codes.forEach((code) => {
      if (found) return;
      const cleanedLng = this.formatLanguageCode(code);
      if (!this.options.supportedLngs || this.isSupportedCode(cleanedLng)) found = cleanedLng;
    });
    if (!found && this.options.supportedLngs) {
      codes.forEach((code) => {
        if (found) return;
        const lngOnly = this.getLanguagePartFromCode(code);
        if (this.isSupportedCode(lngOnly)) return found = lngOnly;
        found = this.options.supportedLngs.find((supportedLng) => {
          if (supportedLng === lngOnly) return supportedLng;
          if (supportedLng.indexOf("-") < 0 && lngOnly.indexOf("-") < 0) return;
          if (supportedLng.indexOf("-") > 0 && lngOnly.indexOf("-") < 0 && supportedLng.substring(0, supportedLng.indexOf("-")) === lngOnly) return supportedLng;
          if (supportedLng.indexOf(lngOnly) === 0 && lngOnly.length > 1) return supportedLng;
        });
      });
    }
    if (!found) found = this.getFallbackCodes(this.options.fallbackLng)[0];
    return found;
  }
  getFallbackCodes(fallbacks, code) {
    if (!fallbacks) return [];
    if (typeof fallbacks === "function") fallbacks = fallbacks(code);
    if (isString(fallbacks)) fallbacks = [fallbacks];
    if (Array.isArray(fallbacks)) return fallbacks;
    if (!code) return fallbacks.default || [];
    let found = fallbacks[code];
    if (!found) found = fallbacks[this.getScriptPartFromCode(code)];
    if (!found) found = fallbacks[this.formatLanguageCode(code)];
    if (!found) found = fallbacks[this.getLanguagePartFromCode(code)];
    if (!found) found = fallbacks.default;
    return found || [];
  }
  toResolveHierarchy(code, fallbackCode) {
    const fallbackCodes = this.getFallbackCodes(fallbackCode || this.options.fallbackLng || [], code);
    const codes = [];
    const addCode = (c) => {
      if (!c) return;
      if (this.isSupportedCode(c)) {
        codes.push(c);
      } else {
        this.logger.warn(`rejecting language code not found in supportedLngs: ${c}`);
      }
    };
    if (isString(code) && (code.indexOf("-") > -1 || code.indexOf("_") > -1)) {
      if (this.options.load !== "languageOnly") addCode(this.formatLanguageCode(code));
      if (this.options.load !== "languageOnly" && this.options.load !== "currentOnly") addCode(this.getScriptPartFromCode(code));
      if (this.options.load !== "currentOnly") addCode(this.getLanguagePartFromCode(code));
    } else if (isString(code)) {
      addCode(this.formatLanguageCode(code));
    }
    fallbackCodes.forEach((fc) => {
      if (codes.indexOf(fc) < 0) addCode(this.formatLanguageCode(fc));
    });
    return codes;
  }
}
let sets = [{
  lngs: ["ach", "ak", "am", "arn", "br", "fil", "gun", "ln", "mfe", "mg", "mi", "oc", "pt", "pt-BR", "tg", "tl", "ti", "tr", "uz", "wa"],
  nr: [1, 2],
  fc: 1
}, {
  lngs: ["af", "an", "ast", "az", "bg", "bn", "ca", "da", "de", "dev", "el", "en", "eo", "es", "et", "eu", "fi", "fo", "fur", "fy", "gl", "gu", "ha", "hi", "hu", "hy", "ia", "it", "kk", "kn", "ku", "lb", "mai", "ml", "mn", "mr", "nah", "nap", "nb", "ne", "nl", "nn", "no", "nso", "pa", "pap", "pms", "ps", "pt-PT", "rm", "sco", "se", "si", "so", "son", "sq", "sv", "sw", "ta", "te", "tk", "ur", "yo"],
  nr: [1, 2],
  fc: 2
}, {
  lngs: ["ay", "bo", "cgg", "fa", "ht", "id", "ja", "jbo", "ka", "km", "ko", "ky", "lo", "ms", "sah", "su", "th", "tt", "ug", "vi", "wo", "zh"],
  nr: [1],
  fc: 3
}, {
  lngs: ["be", "bs", "cnr", "dz", "hr", "ru", "sr", "uk"],
  nr: [1, 2, 5],
  fc: 4
}, {
  lngs: ["ar"],
  nr: [0, 1, 2, 3, 11, 100],
  fc: 5
}, {
  lngs: ["cs", "sk"],
  nr: [1, 2, 5],
  fc: 6
}, {
  lngs: ["csb", "pl"],
  nr: [1, 2, 5],
  fc: 7
}, {
  lngs: ["cy"],
  nr: [1, 2, 3, 8],
  fc: 8
}, {
  lngs: ["fr"],
  nr: [1, 2],
  fc: 9
}, {
  lngs: ["ga"],
  nr: [1, 2, 3, 7, 11],
  fc: 10
}, {
  lngs: ["gd"],
  nr: [1, 2, 3, 20],
  fc: 11
}, {
  lngs: ["is"],
  nr: [1, 2],
  fc: 12
}, {
  lngs: ["jv"],
  nr: [0, 1],
  fc: 13
}, {
  lngs: ["kw"],
  nr: [1, 2, 3, 4],
  fc: 14
}, {
  lngs: ["lt"],
  nr: [1, 2, 10],
  fc: 15
}, {
  lngs: ["lv"],
  nr: [1, 2, 0],
  fc: 16
}, {
  lngs: ["mk"],
  nr: [1, 2],
  fc: 17
}, {
  lngs: ["mnk"],
  nr: [0, 1, 2],
  fc: 18
}, {
  lngs: ["mt"],
  nr: [1, 2, 11, 20],
  fc: 19
}, {
  lngs: ["or"],
  nr: [2, 1],
  fc: 2
}, {
  lngs: ["ro"],
  nr: [1, 2, 20],
  fc: 20
}, {
  lngs: ["sl"],
  nr: [5, 1, 2, 3],
  fc: 21
}, {
  lngs: ["he", "iw"],
  nr: [1, 2, 20, 21],
  fc: 22
}];
let _rulesPluralsTypes = {
  1: (n) => Number(n > 1),
  2: (n) => Number(n != 1),
  3: (n) => 0,
  4: (n) => Number(n % 10 == 1 && n % 100 != 11 ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2),
  5: (n) => Number(n == 0 ? 0 : n == 1 ? 1 : n == 2 ? 2 : n % 100 >= 3 && n % 100 <= 10 ? 3 : n % 100 >= 11 ? 4 : 5),
  6: (n) => Number(n == 1 ? 0 : n >= 2 && n <= 4 ? 1 : 2),
  7: (n) => Number(n == 1 ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2),
  8: (n) => Number(n == 1 ? 0 : n == 2 ? 1 : n != 8 && n != 11 ? 2 : 3),
  9: (n) => Number(n >= 2),
  10: (n) => Number(n == 1 ? 0 : n == 2 ? 1 : n < 7 ? 2 : n < 11 ? 3 : 4),
  11: (n) => Number(n == 1 || n == 11 ? 0 : n == 2 || n == 12 ? 1 : n > 2 && n < 20 ? 2 : 3),
  12: (n) => Number(n % 10 != 1 || n % 100 == 11),
  13: (n) => Number(n !== 0),
  14: (n) => Number(n == 1 ? 0 : n == 2 ? 1 : n == 3 ? 2 : 3),
  15: (n) => Number(n % 10 == 1 && n % 100 != 11 ? 0 : n % 10 >= 2 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2),
  16: (n) => Number(n % 10 == 1 && n % 100 != 11 ? 0 : n !== 0 ? 1 : 2),
  17: (n) => Number(n == 1 || n % 10 == 1 && n % 100 != 11 ? 0 : 1),
  18: (n) => Number(n == 0 ? 0 : n == 1 ? 1 : 2),
  19: (n) => Number(n == 1 ? 0 : n == 0 || n % 100 > 1 && n % 100 < 11 ? 1 : n % 100 > 10 && n % 100 < 20 ? 2 : 3),
  20: (n) => Number(n == 1 ? 0 : n == 0 || n % 100 > 0 && n % 100 < 20 ? 1 : 2),
  21: (n) => Number(n % 100 == 1 ? 1 : n % 100 == 2 ? 2 : n % 100 == 3 || n % 100 == 4 ? 3 : 0),
  22: (n) => Number(n == 1 ? 0 : n == 2 ? 1 : (n < 0 || n > 10) && n % 10 == 0 ? 2 : 3)
};
const nonIntlVersions = ["v1", "v2", "v3"];
const intlVersions = ["v4"];
const suffixesOrder = {
  zero: 0,
  one: 1,
  two: 2,
  few: 3,
  many: 4,
  other: 5
};
const createRules = () => {
  const rules = {};
  sets.forEach((set) => {
    set.lngs.forEach((l) => {
      rules[l] = {
        numbers: set.nr,
        plurals: _rulesPluralsTypes[set.fc]
      };
    });
  });
  return rules;
};
class PluralResolver {
  constructor(languageUtils) {
    let options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.languageUtils = languageUtils;
    this.options = options;
    this.logger = baseLogger.create("pluralResolver");
    if ((!this.options.compatibilityJSON || intlVersions.includes(this.options.compatibilityJSON)) && (typeof Intl === "undefined" || !Intl.PluralRules)) {
      this.options.compatibilityJSON = "v3";
      this.logger.error("Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.");
    }
    this.rules = createRules();
    this.pluralRulesCache = {};
  }
  addRule(lng, obj) {
    this.rules[lng] = obj;
  }
  clearCache() {
    this.pluralRulesCache = {};
  }
  getRule(code) {
    let options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (this.shouldUseIntlApi()) {
      const cleanedCode = getCleanedCode(code === "dev" ? "en" : code);
      const type = options.ordinal ? "ordinal" : "cardinal";
      const cacheKey = JSON.stringify({
        cleanedCode,
        type
      });
      if (cacheKey in this.pluralRulesCache) {
        return this.pluralRulesCache[cacheKey];
      }
      let rule;
      try {
        rule = new Intl.PluralRules(cleanedCode, {
          type
        });
      } catch (err) {
        if (!code.match(/-|_/)) return;
        const lngPart = this.languageUtils.getLanguagePartFromCode(code);
        rule = this.getRule(lngPart, options);
      }
      this.pluralRulesCache[cacheKey] = rule;
      return rule;
    }
    return this.rules[code] || this.rules[this.languageUtils.getLanguagePartFromCode(code)];
  }
  needsPlural(code) {
    let options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const rule = this.getRule(code, options);
    if (this.shouldUseIntlApi()) {
      return rule && rule.resolvedOptions().pluralCategories.length > 1;
    }
    return rule && rule.numbers.length > 1;
  }
  getPluralFormsOfKey(code, key) {
    let options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return this.getSuffixes(code, options).map((suffix) => `${key}${suffix}`);
  }
  getSuffixes(code) {
    let options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const rule = this.getRule(code, options);
    if (!rule) {
      return [];
    }
    if (this.shouldUseIntlApi()) {
      return rule.resolvedOptions().pluralCategories.sort((pluralCategory1, pluralCategory2) => suffixesOrder[pluralCategory1] - suffixesOrder[pluralCategory2]).map((pluralCategory) => `${this.options.prepend}${options.ordinal ? `ordinal${this.options.prepend}` : ""}${pluralCategory}`);
    }
    return rule.numbers.map((number) => this.getSuffix(code, number, options));
  }
  getSuffix(code, count) {
    let options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    const rule = this.getRule(code, options);
    if (rule) {
      if (this.shouldUseIntlApi()) {
        return `${this.options.prepend}${options.ordinal ? `ordinal${this.options.prepend}` : ""}${rule.select(count)}`;
      }
      return this.getSuffixRetroCompatible(rule, count);
    }
    this.logger.warn(`no plural rule found for: ${code}`);
    return "";
  }
  getSuffixRetroCompatible(rule, count) {
    const idx = rule.noAbs ? rule.plurals(count) : rule.plurals(Math.abs(count));
    let suffix = rule.numbers[idx];
    if (this.options.simplifyPluralSuffix && rule.numbers.length === 2 && rule.numbers[0] === 1) {
      if (suffix === 2) {
        suffix = "plural";
      } else if (suffix === 1) {
        suffix = "";
      }
    }
    const returnSuffix = () => this.options.prepend && suffix.toString() ? this.options.prepend + suffix.toString() : suffix.toString();
    if (this.options.compatibilityJSON === "v1") {
      if (suffix === 1) return "";
      if (typeof suffix === "number") return `_plural_${suffix.toString()}`;
      return returnSuffix();
    } else if (this.options.compatibilityJSON === "v2") {
      return returnSuffix();
    } else if (this.options.simplifyPluralSuffix && rule.numbers.length === 2 && rule.numbers[0] === 1) {
      return returnSuffix();
    }
    return this.options.prepend && idx.toString() ? this.options.prepend + idx.toString() : idx.toString();
  }
  shouldUseIntlApi() {
    return !nonIntlVersions.includes(this.options.compatibilityJSON);
  }
}
const deepFindWithDefaults = function(data, defaultData, key) {
  let keySeparator = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : ".";
  let ignoreJSONStructure = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : true;
  let path = getPathWithDefaults(data, defaultData, key);
  if (!path && ignoreJSONStructure && isString(key)) {
    path = deepFind(data, key, keySeparator);
    if (path === void 0) path = deepFind(defaultData, key, keySeparator);
  }
  return path;
};
const regexSafe = (val) => val.replace(/\$/g, "$$$$");
class Interpolator {
  constructor() {
    let options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    this.logger = baseLogger.create("interpolator");
    this.options = options;
    this.format = options.interpolation && options.interpolation.format || ((value) => value);
    this.init(options);
  }
  init() {
    let options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (!options.interpolation) options.interpolation = {
      escapeValue: true
    };
    const {
      escape: escape$1,
      escapeValue,
      useRawValueToEscape,
      prefix,
      prefixEscaped,
      suffix,
      suffixEscaped,
      formatSeparator,
      unescapeSuffix,
      unescapePrefix,
      nestingPrefix,
      nestingPrefixEscaped,
      nestingSuffix,
      nestingSuffixEscaped,
      nestingOptionsSeparator,
      maxReplaces,
      alwaysFormat
    } = options.interpolation;
    this.escape = escape$1 !== void 0 ? escape$1 : escape;
    this.escapeValue = escapeValue !== void 0 ? escapeValue : true;
    this.useRawValueToEscape = useRawValueToEscape !== void 0 ? useRawValueToEscape : false;
    this.prefix = prefix ? regexEscape(prefix) : prefixEscaped || "{{";
    this.suffix = suffix ? regexEscape(suffix) : suffixEscaped || "}}";
    this.formatSeparator = formatSeparator || ",";
    this.unescapePrefix = unescapeSuffix ? "" : unescapePrefix || "-";
    this.unescapeSuffix = this.unescapePrefix ? "" : unescapeSuffix || "";
    this.nestingPrefix = nestingPrefix ? regexEscape(nestingPrefix) : nestingPrefixEscaped || regexEscape("$t(");
    this.nestingSuffix = nestingSuffix ? regexEscape(nestingSuffix) : nestingSuffixEscaped || regexEscape(")");
    this.nestingOptionsSeparator = nestingOptionsSeparator || ",";
    this.maxReplaces = maxReplaces || 1e3;
    this.alwaysFormat = alwaysFormat !== void 0 ? alwaysFormat : false;
    this.resetRegExp();
  }
  reset() {
    if (this.options) this.init(this.options);
  }
  resetRegExp() {
    const getOrResetRegExp = (existingRegExp, pattern) => {
      if (existingRegExp && existingRegExp.source === pattern) {
        existingRegExp.lastIndex = 0;
        return existingRegExp;
      }
      return new RegExp(pattern, "g");
    };
    this.regexp = getOrResetRegExp(this.regexp, `${this.prefix}(.+?)${this.suffix}`);
    this.regexpUnescape = getOrResetRegExp(this.regexpUnescape, `${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`);
    this.nestingRegexp = getOrResetRegExp(this.nestingRegexp, `${this.nestingPrefix}(.+?)${this.nestingSuffix}`);
  }
  interpolate(str, data, lng, options) {
    let match;
    let value;
    let replaces;
    const defaultData = this.options && this.options.interpolation && this.options.interpolation.defaultVariables || {};
    const handleFormat = (key) => {
      if (key.indexOf(this.formatSeparator) < 0) {
        const path = deepFindWithDefaults(data, defaultData, key, this.options.keySeparator, this.options.ignoreJSONStructure);
        return this.alwaysFormat ? this.format(path, void 0, lng, {
          ...options,
          ...data,
          interpolationkey: key
        }) : path;
      }
      const p = key.split(this.formatSeparator);
      const k = p.shift().trim();
      const f = p.join(this.formatSeparator).trim();
      return this.format(deepFindWithDefaults(data, defaultData, k, this.options.keySeparator, this.options.ignoreJSONStructure), f, lng, {
        ...options,
        ...data,
        interpolationkey: k
      });
    };
    this.resetRegExp();
    const missingInterpolationHandler = options && options.missingInterpolationHandler || this.options.missingInterpolationHandler;
    const skipOnVariables = options && options.interpolation && options.interpolation.skipOnVariables !== void 0 ? options.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables;
    const todos = [{
      regex: this.regexpUnescape,
      safeValue: (val) => regexSafe(val)
    }, {
      regex: this.regexp,
      safeValue: (val) => this.escapeValue ? regexSafe(this.escape(val)) : regexSafe(val)
    }];
    todos.forEach((todo) => {
      replaces = 0;
      while (match = todo.regex.exec(str)) {
        const matchedVar = match[1].trim();
        value = handleFormat(matchedVar);
        if (value === void 0) {
          if (typeof missingInterpolationHandler === "function") {
            const temp = missingInterpolationHandler(str, match, options);
            value = isString(temp) ? temp : "";
          } else if (options && Object.prototype.hasOwnProperty.call(options, matchedVar)) {
            value = "";
          } else if (skipOnVariables) {
            value = match[0];
            continue;
          } else {
            this.logger.warn(`missed to pass in variable ${matchedVar} for interpolating ${str}`);
            value = "";
          }
        } else if (!isString(value) && !this.useRawValueToEscape) {
          value = makeString(value);
        }
        const safeValue = todo.safeValue(value);
        str = str.replace(match[0], safeValue);
        if (skipOnVariables) {
          todo.regex.lastIndex += value.length;
          todo.regex.lastIndex -= match[0].length;
        } else {
          todo.regex.lastIndex = 0;
        }
        replaces++;
        if (replaces >= this.maxReplaces) {
          break;
        }
      }
    });
    return str;
  }
  nest(str, fc) {
    let options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    let match;
    let value;
    let clonedOptions;
    const handleHasOptions = (key, inheritedOptions) => {
      const sep = this.nestingOptionsSeparator;
      if (key.indexOf(sep) < 0) return key;
      const c = key.split(new RegExp(`${sep}[ ]*{`));
      let optionsString = `{${c[1]}`;
      key = c[0];
      optionsString = this.interpolate(optionsString, clonedOptions);
      const matchedSingleQuotes = optionsString.match(/'/g);
      const matchedDoubleQuotes = optionsString.match(/"/g);
      if (matchedSingleQuotes && matchedSingleQuotes.length % 2 === 0 && !matchedDoubleQuotes || matchedDoubleQuotes.length % 2 !== 0) {
        optionsString = optionsString.replace(/'/g, '"');
      }
      try {
        clonedOptions = JSON.parse(optionsString);
        if (inheritedOptions) clonedOptions = {
          ...inheritedOptions,
          ...clonedOptions
        };
      } catch (e) {
        this.logger.warn(`failed parsing options string in nesting for key ${key}`, e);
        return `${key}${sep}${optionsString}`;
      }
      if (clonedOptions.defaultValue && clonedOptions.defaultValue.indexOf(this.prefix) > -1) delete clonedOptions.defaultValue;
      return key;
    };
    while (match = this.nestingRegexp.exec(str)) {
      let formatters = [];
      clonedOptions = {
        ...options
      };
      clonedOptions = clonedOptions.replace && !isString(clonedOptions.replace) ? clonedOptions.replace : clonedOptions;
      clonedOptions.applyPostProcessor = false;
      delete clonedOptions.defaultValue;
      let doReduce = false;
      if (match[0].indexOf(this.formatSeparator) !== -1 && !/{.*}/.test(match[1])) {
        const r = match[1].split(this.formatSeparator).map((elem) => elem.trim());
        match[1] = r.shift();
        formatters = r;
        doReduce = true;
      }
      value = fc(handleHasOptions.call(this, match[1].trim(), clonedOptions), clonedOptions);
      if (value && match[0] === str && !isString(value)) return value;
      if (!isString(value)) value = makeString(value);
      if (!value) {
        this.logger.warn(`missed to resolve ${match[1]} for nesting ${str}`);
        value = "";
      }
      if (doReduce) {
        value = formatters.reduce((v, f) => this.format(v, f, options.lng, {
          ...options,
          interpolationkey: match[1].trim()
        }), value.trim());
      }
      str = str.replace(match[0], value);
      this.regexp.lastIndex = 0;
    }
    return str;
  }
}
const parseFormatStr = (formatStr) => {
  let formatName = formatStr.toLowerCase().trim();
  const formatOptions = {};
  if (formatStr.indexOf("(") > -1) {
    const p = formatStr.split("(");
    formatName = p[0].toLowerCase().trim();
    const optStr = p[1].substring(0, p[1].length - 1);
    if (formatName === "currency" && optStr.indexOf(":") < 0) {
      if (!formatOptions.currency) formatOptions.currency = optStr.trim();
    } else if (formatName === "relativetime" && optStr.indexOf(":") < 0) {
      if (!formatOptions.range) formatOptions.range = optStr.trim();
    } else {
      const opts = optStr.split(";");
      opts.forEach((opt) => {
        if (opt) {
          const [key, ...rest] = opt.split(":");
          const val = rest.join(":").trim().replace(/^'+|'+$/g, "");
          const trimmedKey = key.trim();
          if (!formatOptions[trimmedKey]) formatOptions[trimmedKey] = val;
          if (val === "false") formatOptions[trimmedKey] = false;
          if (val === "true") formatOptions[trimmedKey] = true;
          if (!isNaN(val)) formatOptions[trimmedKey] = parseInt(val, 10);
        }
      });
    }
  }
  return {
    formatName,
    formatOptions
  };
};
const createCachedFormatter = (fn) => {
  const cache = {};
  return (val, lng, options) => {
    let optForCache = options;
    if (options && options.interpolationkey && options.formatParams && options.formatParams[options.interpolationkey] && options[options.interpolationkey]) {
      optForCache = {
        ...optForCache,
        [options.interpolationkey]: void 0
      };
    }
    const key = lng + JSON.stringify(optForCache);
    let formatter = cache[key];
    if (!formatter) {
      formatter = fn(getCleanedCode(lng), options);
      cache[key] = formatter;
    }
    return formatter(val);
  };
};
class Formatter {
  constructor() {
    let options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    this.logger = baseLogger.create("formatter");
    this.options = options;
    this.formats = {
      number: createCachedFormatter((lng, opt) => {
        const formatter = new Intl.NumberFormat(lng, {
          ...opt
        });
        return (val) => formatter.format(val);
      }),
      currency: createCachedFormatter((lng, opt) => {
        const formatter = new Intl.NumberFormat(lng, {
          ...opt,
          style: "currency"
        });
        return (val) => formatter.format(val);
      }),
      datetime: createCachedFormatter((lng, opt) => {
        const formatter = new Intl.DateTimeFormat(lng, {
          ...opt
        });
        return (val) => formatter.format(val);
      }),
      relativetime: createCachedFormatter((lng, opt) => {
        const formatter = new Intl.RelativeTimeFormat(lng, {
          ...opt
        });
        return (val) => formatter.format(val, opt.range || "day");
      }),
      list: createCachedFormatter((lng, opt) => {
        const formatter = new Intl.ListFormat(lng, {
          ...opt
        });
        return (val) => formatter.format(val);
      })
    };
    this.init(options);
  }
  init(services) {
    let options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
      interpolation: {}
    };
    this.formatSeparator = options.interpolation.formatSeparator || ",";
  }
  add(name, fc) {
    this.formats[name.toLowerCase().trim()] = fc;
  }
  addCached(name, fc) {
    this.formats[name.toLowerCase().trim()] = createCachedFormatter(fc);
  }
  format(value, format, lng) {
    let options = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    const formats = format.split(this.formatSeparator);
    if (formats.length > 1 && formats[0].indexOf("(") > 1 && formats[0].indexOf(")") < 0 && formats.find((f) => f.indexOf(")") > -1)) {
      const lastIndex = formats.findIndex((f) => f.indexOf(")") > -1);
      formats[0] = [formats[0], ...formats.splice(1, lastIndex)].join(this.formatSeparator);
    }
    const result = formats.reduce((mem, f) => {
      const {
        formatName,
        formatOptions
      } = parseFormatStr(f);
      if (this.formats[formatName]) {
        let formatted = mem;
        try {
          const valOptions = options && options.formatParams && options.formatParams[options.interpolationkey] || {};
          const l = valOptions.locale || valOptions.lng || options.locale || options.lng || lng;
          formatted = this.formats[formatName](mem, l, {
            ...formatOptions,
            ...options,
            ...valOptions
          });
        } catch (error) {
          this.logger.warn(error);
        }
        return formatted;
      } else {
        this.logger.warn(`there was no format function for ${formatName}`);
      }
      return mem;
    }, value);
    return result;
  }
}
const removePending = (q, name) => {
  if (q.pending[name] !== void 0) {
    delete q.pending[name];
    q.pendingCount--;
  }
};
class Connector extends EventEmitter {
  constructor(backend, store, services) {
    let options = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    super();
    this.backend = backend;
    this.store = store;
    this.services = services;
    this.languageUtils = services.languageUtils;
    this.options = options;
    this.logger = baseLogger.create("backendConnector");
    this.waitingReads = [];
    this.maxParallelReads = options.maxParallelReads || 10;
    this.readingCalls = 0;
    this.maxRetries = options.maxRetries >= 0 ? options.maxRetries : 5;
    this.retryTimeout = options.retryTimeout >= 1 ? options.retryTimeout : 350;
    this.state = {};
    this.queue = [];
    if (this.backend && this.backend.init) {
      this.backend.init(services, options.backend, options);
    }
  }
  queueLoad(languages, namespaces, options, callback) {
    const toLoad = {};
    const pending = {};
    const toLoadLanguages = {};
    const toLoadNamespaces = {};
    languages.forEach((lng) => {
      let hasAllNamespaces = true;
      namespaces.forEach((ns) => {
        const name = `${lng}|${ns}`;
        if (!options.reload && this.store.hasResourceBundle(lng, ns)) {
          this.state[name] = 2;
        } else if (this.state[name] < 0) ;
        else if (this.state[name] === 1) {
          if (pending[name] === void 0) pending[name] = true;
        } else {
          this.state[name] = 1;
          hasAllNamespaces = false;
          if (pending[name] === void 0) pending[name] = true;
          if (toLoad[name] === void 0) toLoad[name] = true;
          if (toLoadNamespaces[ns] === void 0) toLoadNamespaces[ns] = true;
        }
      });
      if (!hasAllNamespaces) toLoadLanguages[lng] = true;
    });
    if (Object.keys(toLoad).length || Object.keys(pending).length) {
      this.queue.push({
        pending,
        pendingCount: Object.keys(pending).length,
        loaded: {},
        errors: [],
        callback
      });
    }
    return {
      toLoad: Object.keys(toLoad),
      pending: Object.keys(pending),
      toLoadLanguages: Object.keys(toLoadLanguages),
      toLoadNamespaces: Object.keys(toLoadNamespaces)
    };
  }
  loaded(name, err, data) {
    const s = name.split("|");
    const lng = s[0];
    const ns = s[1];
    if (err) this.emit("failedLoading", lng, ns, err);
    if (!err && data) {
      this.store.addResourceBundle(lng, ns, data, void 0, void 0, {
        skipCopy: true
      });
    }
    this.state[name] = err ? -1 : 2;
    if (err && data) this.state[name] = 0;
    const loaded = {};
    this.queue.forEach((q) => {
      pushPath(q.loaded, [lng], ns);
      removePending(q, name);
      if (err) q.errors.push(err);
      if (q.pendingCount === 0 && !q.done) {
        Object.keys(q.loaded).forEach((l) => {
          if (!loaded[l]) loaded[l] = {};
          const loadedKeys = q.loaded[l];
          if (loadedKeys.length) {
            loadedKeys.forEach((n) => {
              if (loaded[l][n] === void 0) loaded[l][n] = true;
            });
          }
        });
        q.done = true;
        if (q.errors.length) {
          q.callback(q.errors);
        } else {
          q.callback();
        }
      }
    });
    this.emit("loaded", loaded);
    this.queue = this.queue.filter((q) => !q.done);
  }
  read(lng, ns, fcName) {
    let tried = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0;
    let wait = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : this.retryTimeout;
    let callback = arguments.length > 5 ? arguments[5] : void 0;
    if (!lng.length) return callback(null, {});
    if (this.readingCalls >= this.maxParallelReads) {
      this.waitingReads.push({
        lng,
        ns,
        fcName,
        tried,
        wait,
        callback
      });
      return;
    }
    this.readingCalls++;
    const resolver = (err, data) => {
      this.readingCalls--;
      if (this.waitingReads.length > 0) {
        const next = this.waitingReads.shift();
        this.read(next.lng, next.ns, next.fcName, next.tried, next.wait, next.callback);
      }
      if (err && data && tried < this.maxRetries) {
        setTimeout(() => {
          this.read.call(this, lng, ns, fcName, tried + 1, wait * 2, callback);
        }, wait);
        return;
      }
      callback(err, data);
    };
    const fc = this.backend[fcName].bind(this.backend);
    if (fc.length === 2) {
      try {
        const r = fc(lng, ns);
        if (r && typeof r.then === "function") {
          r.then((data) => resolver(null, data)).catch(resolver);
        } else {
          resolver(null, r);
        }
      } catch (err) {
        resolver(err);
      }
      return;
    }
    return fc(lng, ns, resolver);
  }
  prepareLoading(languages, namespaces) {
    let options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    let callback = arguments.length > 3 ? arguments[3] : void 0;
    if (!this.backend) {
      this.logger.warn("No backend was added via i18next.use. Will not load resources.");
      return callback && callback();
    }
    if (isString(languages)) languages = this.languageUtils.toResolveHierarchy(languages);
    if (isString(namespaces)) namespaces = [namespaces];
    const toLoad = this.queueLoad(languages, namespaces, options, callback);
    if (!toLoad.toLoad.length) {
      if (!toLoad.pending.length) callback();
      return null;
    }
    toLoad.toLoad.forEach((name) => {
      this.loadOne(name);
    });
  }
  load(languages, namespaces, callback) {
    this.prepareLoading(languages, namespaces, {}, callback);
  }
  reload(languages, namespaces, callback) {
    this.prepareLoading(languages, namespaces, {
      reload: true
    }, callback);
  }
  loadOne(name) {
    let prefix = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
    const s = name.split("|");
    const lng = s[0];
    const ns = s[1];
    this.read(lng, ns, "read", void 0, void 0, (err, data) => {
      if (err) this.logger.warn(`${prefix}loading namespace ${ns} for language ${lng} failed`, err);
      if (!err && data) this.logger.log(`${prefix}loaded namespace ${ns} for language ${lng}`, data);
      this.loaded(name, err, data);
    });
  }
  saveMissing(languages, namespace, key, fallbackValue, isUpdate) {
    let options = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {};
    let clb = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : () => {
    };
    if (this.services.utils && this.services.utils.hasLoadedNamespace && !this.services.utils.hasLoadedNamespace(namespace)) {
      this.logger.warn(`did not save key "${key}" as the namespace "${namespace}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");
      return;
    }
    if (key === void 0 || key === null || key === "") return;
    if (this.backend && this.backend.create) {
      const opts = {
        ...options,
        isUpdate
      };
      const fc = this.backend.create.bind(this.backend);
      if (fc.length < 6) {
        try {
          let r;
          if (fc.length === 5) {
            r = fc(languages, namespace, key, fallbackValue, opts);
          } else {
            r = fc(languages, namespace, key, fallbackValue);
          }
          if (r && typeof r.then === "function") {
            r.then((data) => clb(null, data)).catch(clb);
          } else {
            clb(null, r);
          }
        } catch (err) {
          clb(err);
        }
      } else {
        fc(languages, namespace, key, fallbackValue, clb, opts);
      }
    }
    if (!languages || !languages[0]) return;
    this.store.addResource(languages[0], namespace, key, fallbackValue);
  }
}
const get = () => ({
  debug: false,
  initImmediate: true,
  ns: ["translation"],
  defaultNS: ["translation"],
  fallbackLng: ["dev"],
  fallbackNS: false,
  supportedLngs: false,
  nonExplicitSupportedLngs: false,
  load: "all",
  preload: false,
  simplifyPluralSuffix: true,
  keySeparator: ".",
  nsSeparator: ":",
  pluralSeparator: "_",
  contextSeparator: "_",
  partialBundledLanguages: false,
  saveMissing: false,
  updateMissing: false,
  saveMissingTo: "fallback",
  saveMissingPlurals: true,
  missingKeyHandler: false,
  missingInterpolationHandler: false,
  postProcess: false,
  postProcessPassResolved: false,
  returnNull: false,
  returnEmptyString: true,
  returnObjects: false,
  joinArrays: false,
  returnedObjectHandler: false,
  parseMissingKeyHandler: false,
  appendNamespaceToMissingKey: false,
  appendNamespaceToCIMode: false,
  overloadTranslationOptionHandler: (args) => {
    let ret = {};
    if (typeof args[1] === "object") ret = args[1];
    if (isString(args[1])) ret.defaultValue = args[1];
    if (isString(args[2])) ret.tDescription = args[2];
    if (typeof args[2] === "object" || typeof args[3] === "object") {
      const options = args[3] || args[2];
      Object.keys(options).forEach((key) => {
        ret[key] = options[key];
      });
    }
    return ret;
  },
  interpolation: {
    escapeValue: true,
    format: (value) => value,
    prefix: "{{",
    suffix: "}}",
    formatSeparator: ",",
    unescapePrefix: "-",
    nestingPrefix: "$t(",
    nestingSuffix: ")",
    nestingOptionsSeparator: ",",
    maxReplaces: 1e3,
    skipOnVariables: true
  }
});
const transformOptions = (options) => {
  if (isString(options.ns)) options.ns = [options.ns];
  if (isString(options.fallbackLng)) options.fallbackLng = [options.fallbackLng];
  if (isString(options.fallbackNS)) options.fallbackNS = [options.fallbackNS];
  if (options.supportedLngs && options.supportedLngs.indexOf("cimode") < 0) {
    options.supportedLngs = options.supportedLngs.concat(["cimode"]);
  }
  return options;
};
const noop = () => {
};
const bindMemberFunctions = (inst) => {
  const mems = Object.getOwnPropertyNames(Object.getPrototypeOf(inst));
  mems.forEach((mem) => {
    if (typeof inst[mem] === "function") {
      inst[mem] = inst[mem].bind(inst);
    }
  });
};
class I18n extends EventEmitter {
  constructor() {
    let options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    let callback = arguments.length > 1 ? arguments[1] : void 0;
    super();
    this.options = transformOptions(options);
    this.services = {};
    this.logger = baseLogger;
    this.modules = {
      external: []
    };
    bindMemberFunctions(this);
    if (callback && !this.isInitialized && !options.isClone) {
      if (!this.options.initImmediate) {
        this.init(options, callback);
        return this;
      }
      setTimeout(() => {
        this.init(options, callback);
      }, 0);
    }
  }
  init() {
    var _this = this;
    let options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    let callback = arguments.length > 1 ? arguments[1] : void 0;
    this.isInitializing = true;
    if (typeof options === "function") {
      callback = options;
      options = {};
    }
    if (!options.defaultNS && options.defaultNS !== false && options.ns) {
      if (isString(options.ns)) {
        options.defaultNS = options.ns;
      } else if (options.ns.indexOf("translation") < 0) {
        options.defaultNS = options.ns[0];
      }
    }
    const defOpts = get();
    this.options = {
      ...defOpts,
      ...this.options,
      ...transformOptions(options)
    };
    if (this.options.compatibilityAPI !== "v1") {
      this.options.interpolation = {
        ...defOpts.interpolation,
        ...this.options.interpolation
      };
    }
    if (options.keySeparator !== void 0) {
      this.options.userDefinedKeySeparator = options.keySeparator;
    }
    if (options.nsSeparator !== void 0) {
      this.options.userDefinedNsSeparator = options.nsSeparator;
    }
    const createClassOnDemand = (ClassOrObject) => {
      if (!ClassOrObject) return null;
      if (typeof ClassOrObject === "function") return new ClassOrObject();
      return ClassOrObject;
    };
    if (!this.options.isClone) {
      if (this.modules.logger) {
        baseLogger.init(createClassOnDemand(this.modules.logger), this.options);
      } else {
        baseLogger.init(null, this.options);
      }
      let formatter;
      if (this.modules.formatter) {
        formatter = this.modules.formatter;
      } else if (typeof Intl !== "undefined") {
        formatter = Formatter;
      }
      const lu = new LanguageUtil(this.options);
      this.store = new ResourceStore(this.options.resources, this.options);
      const s = this.services;
      s.logger = baseLogger;
      s.resourceStore = this.store;
      s.languageUtils = lu;
      s.pluralResolver = new PluralResolver(lu, {
        prepend: this.options.pluralSeparator,
        compatibilityJSON: this.options.compatibilityJSON,
        simplifyPluralSuffix: this.options.simplifyPluralSuffix
      });
      if (formatter && (!this.options.interpolation.format || this.options.interpolation.format === defOpts.interpolation.format)) {
        s.formatter = createClassOnDemand(formatter);
        s.formatter.init(s, this.options);
        this.options.interpolation.format = s.formatter.format.bind(s.formatter);
      }
      s.interpolator = new Interpolator(this.options);
      s.utils = {
        hasLoadedNamespace: this.hasLoadedNamespace.bind(this)
      };
      s.backendConnector = new Connector(createClassOnDemand(this.modules.backend), s.resourceStore, s, this.options);
      s.backendConnector.on("*", function(event) {
        for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }
        _this.emit(event, ...args);
      });
      if (this.modules.languageDetector) {
        s.languageDetector = createClassOnDemand(this.modules.languageDetector);
        if (s.languageDetector.init) s.languageDetector.init(s, this.options.detection, this.options);
      }
      if (this.modules.i18nFormat) {
        s.i18nFormat = createClassOnDemand(this.modules.i18nFormat);
        if (s.i18nFormat.init) s.i18nFormat.init(this);
      }
      this.translator = new Translator(this.services, this.options);
      this.translator.on("*", function(event) {
        for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
          args[_key2 - 1] = arguments[_key2];
        }
        _this.emit(event, ...args);
      });
      this.modules.external.forEach((m2) => {
        if (m2.init) m2.init(this);
      });
    }
    this.format = this.options.interpolation.format;
    if (!callback) callback = noop;
    if (this.options.fallbackLng && !this.services.languageDetector && !this.options.lng) {
      const codes = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
      if (codes.length > 0 && codes[0] !== "dev") this.options.lng = codes[0];
    }
    if (!this.services.languageDetector && !this.options.lng) {
      this.logger.warn("init: no languageDetector is used and no lng is defined");
    }
    const storeApi = ["getResource", "hasResourceBundle", "getResourceBundle", "getDataByLanguage"];
    storeApi.forEach((fcName) => {
      this[fcName] = function() {
        return _this.store[fcName](...arguments);
      };
    });
    const storeApiChained = ["addResource", "addResources", "addResourceBundle", "removeResourceBundle"];
    storeApiChained.forEach((fcName) => {
      this[fcName] = function() {
        _this.store[fcName](...arguments);
        return _this;
      };
    });
    const deferred = defer();
    const load = () => {
      const finish = (err, t) => {
        this.isInitializing = false;
        if (this.isInitialized && !this.initializedStoreOnce) this.logger.warn("init: i18next is already initialized. You should call init just once!");
        this.isInitialized = true;
        if (!this.options.isClone) this.logger.log("initialized", this.options);
        this.emit("initialized", this.options);
        deferred.resolve(t);
        callback(err, t);
      };
      if (this.languages && this.options.compatibilityAPI !== "v1" && !this.isInitialized) return finish(null, this.t.bind(this));
      this.changeLanguage(this.options.lng, finish);
    };
    if (this.options.resources || !this.options.initImmediate) {
      load();
    } else {
      setTimeout(load, 0);
    }
    return deferred;
  }
  loadResources(language) {
    let callback = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : noop;
    let usedCallback = callback;
    const usedLng = isString(language) ? language : this.language;
    if (typeof language === "function") usedCallback = language;
    if (!this.options.resources || this.options.partialBundledLanguages) {
      if (usedLng && usedLng.toLowerCase() === "cimode" && (!this.options.preload || this.options.preload.length === 0)) return usedCallback();
      const toLoad = [];
      const append2 = (lng) => {
        if (!lng) return;
        if (lng === "cimode") return;
        const lngs = this.services.languageUtils.toResolveHierarchy(lng);
        lngs.forEach((l) => {
          if (l === "cimode") return;
          if (toLoad.indexOf(l) < 0) toLoad.push(l);
        });
      };
      if (!usedLng) {
        const fallbacks = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
        fallbacks.forEach((l) => append2(l));
      } else {
        append2(usedLng);
      }
      if (this.options.preload) {
        this.options.preload.forEach((l) => append2(l));
      }
      this.services.backendConnector.load(toLoad, this.options.ns, (e) => {
        if (!e && !this.resolvedLanguage && this.language) this.setResolvedLanguage(this.language);
        usedCallback(e);
      });
    } else {
      usedCallback(null);
    }
  }
  reloadResources(lngs, ns, callback) {
    const deferred = defer();
    if (typeof lngs === "function") {
      callback = lngs;
      lngs = void 0;
    }
    if (typeof ns === "function") {
      callback = ns;
      ns = void 0;
    }
    if (!lngs) lngs = this.languages;
    if (!ns) ns = this.options.ns;
    if (!callback) callback = noop;
    this.services.backendConnector.reload(lngs, ns, (err) => {
      deferred.resolve();
      callback(err);
    });
    return deferred;
  }
  use(module) {
    if (!module) throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");
    if (!module.type) throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");
    if (module.type === "backend") {
      this.modules.backend = module;
    }
    if (module.type === "logger" || module.log && module.warn && module.error) {
      this.modules.logger = module;
    }
    if (module.type === "languageDetector") {
      this.modules.languageDetector = module;
    }
    if (module.type === "i18nFormat") {
      this.modules.i18nFormat = module;
    }
    if (module.type === "postProcessor") {
      postProcessor.addPostProcessor(module);
    }
    if (module.type === "formatter") {
      this.modules.formatter = module;
    }
    if (module.type === "3rdParty") {
      this.modules.external.push(module);
    }
    return this;
  }
  setResolvedLanguage(l) {
    if (!l || !this.languages) return;
    if (["cimode", "dev"].indexOf(l) > -1) return;
    for (let li = 0; li < this.languages.length; li++) {
      const lngInLngs = this.languages[li];
      if (["cimode", "dev"].indexOf(lngInLngs) > -1) continue;
      if (this.store.hasLanguageSomeTranslations(lngInLngs)) {
        this.resolvedLanguage = lngInLngs;
        break;
      }
    }
  }
  changeLanguage(lng, callback) {
    var _this2 = this;
    this.isLanguageChangingTo = lng;
    const deferred = defer();
    this.emit("languageChanging", lng);
    const setLngProps = (l) => {
      this.language = l;
      this.languages = this.services.languageUtils.toResolveHierarchy(l);
      this.resolvedLanguage = void 0;
      this.setResolvedLanguage(l);
    };
    const done = (err, l) => {
      if (l) {
        setLngProps(l);
        this.translator.changeLanguage(l);
        this.isLanguageChangingTo = void 0;
        this.emit("languageChanged", l);
        this.logger.log("languageChanged", l);
      } else {
        this.isLanguageChangingTo = void 0;
      }
      deferred.resolve(function() {
        return _this2.t(...arguments);
      });
      if (callback) callback(err, function() {
        return _this2.t(...arguments);
      });
    };
    const setLng = (lngs) => {
      if (!lng && !lngs && this.services.languageDetector) lngs = [];
      const l = isString(lngs) ? lngs : this.services.languageUtils.getBestMatchFromCodes(lngs);
      if (l) {
        if (!this.language) {
          setLngProps(l);
        }
        if (!this.translator.language) this.translator.changeLanguage(l);
        if (this.services.languageDetector && this.services.languageDetector.cacheUserLanguage) this.services.languageDetector.cacheUserLanguage(l);
      }
      this.loadResources(l, (err) => {
        done(err, l);
      });
    };
    if (!lng && this.services.languageDetector && !this.services.languageDetector.async) {
      setLng(this.services.languageDetector.detect());
    } else if (!lng && this.services.languageDetector && this.services.languageDetector.async) {
      if (this.services.languageDetector.detect.length === 0) {
        this.services.languageDetector.detect().then(setLng);
      } else {
        this.services.languageDetector.detect(setLng);
      }
    } else {
      setLng(lng);
    }
    return deferred;
  }
  getFixedT(lng, ns, keyPrefix) {
    var _this3 = this;
    const fixedT = function(key, opts) {
      let options;
      if (typeof opts !== "object") {
        for (var _len3 = arguments.length, rest = new Array(_len3 > 2 ? _len3 - 2 : 0), _key3 = 2; _key3 < _len3; _key3++) {
          rest[_key3 - 2] = arguments[_key3];
        }
        options = _this3.options.overloadTranslationOptionHandler([key, opts].concat(rest));
      } else {
        options = {
          ...opts
        };
      }
      options.lng = options.lng || fixedT.lng;
      options.lngs = options.lngs || fixedT.lngs;
      options.ns = options.ns || fixedT.ns;
      if (options.keyPrefix !== "") options.keyPrefix = options.keyPrefix || keyPrefix || fixedT.keyPrefix;
      const keySeparator = _this3.options.keySeparator || ".";
      let resultKey;
      if (options.keyPrefix && Array.isArray(key)) {
        resultKey = key.map((k) => `${options.keyPrefix}${keySeparator}${k}`);
      } else {
        resultKey = options.keyPrefix ? `${options.keyPrefix}${keySeparator}${key}` : key;
      }
      return _this3.t(resultKey, options);
    };
    if (isString(lng)) {
      fixedT.lng = lng;
    } else {
      fixedT.lngs = lng;
    }
    fixedT.ns = ns;
    fixedT.keyPrefix = keyPrefix;
    return fixedT;
  }
  t() {
    return this.translator && this.translator.translate(...arguments);
  }
  exists() {
    return this.translator && this.translator.exists(...arguments);
  }
  setDefaultNamespace(ns) {
    this.options.defaultNS = ns;
  }
  hasLoadedNamespace(ns) {
    let options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (!this.isInitialized) {
      this.logger.warn("hasLoadedNamespace: i18next was not initialized", this.languages);
      return false;
    }
    if (!this.languages || !this.languages.length) {
      this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty", this.languages);
      return false;
    }
    const lng = options.lng || this.resolvedLanguage || this.languages[0];
    const fallbackLng = this.options ? this.options.fallbackLng : false;
    const lastLng = this.languages[this.languages.length - 1];
    if (lng.toLowerCase() === "cimode") return true;
    const loadNotPending = (l, n) => {
      const loadState = this.services.backendConnector.state[`${l}|${n}`];
      return loadState === -1 || loadState === 0 || loadState === 2;
    };
    if (options.precheck) {
      const preResult = options.precheck(this, loadNotPending);
      if (preResult !== void 0) return preResult;
    }
    if (this.hasResourceBundle(lng, ns)) return true;
    if (!this.services.backendConnector.backend || this.options.resources && !this.options.partialBundledLanguages) return true;
    if (loadNotPending(lng, ns) && (!fallbackLng || loadNotPending(lastLng, ns))) return true;
    return false;
  }
  loadNamespaces(ns, callback) {
    const deferred = defer();
    if (!this.options.ns) {
      if (callback) callback();
      return Promise.resolve();
    }
    if (isString(ns)) ns = [ns];
    ns.forEach((n) => {
      if (this.options.ns.indexOf(n) < 0) this.options.ns.push(n);
    });
    this.loadResources((err) => {
      deferred.resolve();
      if (callback) callback(err);
    });
    return deferred;
  }
  loadLanguages(lngs, callback) {
    const deferred = defer();
    if (isString(lngs)) lngs = [lngs];
    const preloaded = this.options.preload || [];
    const newLngs = lngs.filter((lng) => preloaded.indexOf(lng) < 0 && this.services.languageUtils.isSupportedCode(lng));
    if (!newLngs.length) {
      if (callback) callback();
      return Promise.resolve();
    }
    this.options.preload = preloaded.concat(newLngs);
    this.loadResources((err) => {
      deferred.resolve();
      if (callback) callback(err);
    });
    return deferred;
  }
  dir(lng) {
    if (!lng) lng = this.resolvedLanguage || (this.languages && this.languages.length > 0 ? this.languages[0] : this.language);
    if (!lng) return "rtl";
    const rtlLngs = ["ar", "shu", "sqr", "ssh", "xaa", "yhd", "yud", "aao", "abh", "abv", "acm", "acq", "acw", "acx", "acy", "adf", "ads", "aeb", "aec", "afb", "ajp", "apc", "apd", "arb", "arq", "ars", "ary", "arz", "auz", "avl", "ayh", "ayl", "ayn", "ayp", "bbz", "pga", "he", "iw", "ps", "pbt", "pbu", "pst", "prp", "prd", "ug", "ur", "ydd", "yds", "yih", "ji", "yi", "hbo", "men", "xmn", "fa", "jpr", "peo", "pes", "prs", "dv", "sam", "ckb"];
    const languageUtils = this.services && this.services.languageUtils || new LanguageUtil(get());
    return rtlLngs.indexOf(languageUtils.getLanguagePartFromCode(lng)) > -1 || lng.toLowerCase().indexOf("-arab") > 1 ? "rtl" : "ltr";
  }
  static createInstance() {
    let options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    let callback = arguments.length > 1 ? arguments[1] : void 0;
    return new I18n(options, callback);
  }
  cloneInstance() {
    let options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    let callback = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : noop;
    const forkResourceStore = options.forkResourceStore;
    if (forkResourceStore) delete options.forkResourceStore;
    const mergedOptions = {
      ...this.options,
      ...options,
      ...{
        isClone: true
      }
    };
    const clone = new I18n(mergedOptions);
    if (options.debug !== void 0 || options.prefix !== void 0) {
      clone.logger = clone.logger.clone(options);
    }
    const membersToCopy = ["store", "services", "language"];
    membersToCopy.forEach((m2) => {
      clone[m2] = this[m2];
    });
    clone.services = {
      ...this.services
    };
    clone.services.utils = {
      hasLoadedNamespace: clone.hasLoadedNamespace.bind(clone)
    };
    if (forkResourceStore) {
      clone.store = new ResourceStore(this.store.data, mergedOptions);
      clone.services.resourceStore = clone.store;
    }
    clone.translator = new Translator(clone.services, mergedOptions);
    clone.translator.on("*", function(event) {
      for (var _len4 = arguments.length, args = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
        args[_key4 - 1] = arguments[_key4];
      }
      clone.emit(event, ...args);
    });
    clone.init(mergedOptions, callback);
    clone.translator.options = mergedOptions;
    clone.translator.backendConnector.services.utils = {
      hasLoadedNamespace: clone.hasLoadedNamespace.bind(clone)
    };
    return clone;
  }
  toJSON() {
    return {
      options: this.options,
      store: this.store,
      language: this.language,
      languages: this.languages,
      resolvedLanguage: this.resolvedLanguage
    };
  }
}
const instance = I18n.createInstance();
instance.createInstance = I18n.createInstance;
instance.createInstance;
instance.dir;
instance.init;
instance.loadResources;
instance.reloadResources;
instance.use;
instance.changeLanguage;
instance.getFixedT;
instance.t;
instance.exists;
instance.setDefaultNamespace;
instance.hasLoadedNamespace;
instance.loadNamespaces;
instance.loadLanguages;
const en = {
  // Navigation
  nav: {
    home: "Home",
    about: "About",
    academics: "Academics",
    news: "News & Events",
    admissions: "Admissions",
    gallery: "Gallery",
    contact: "Contact",
    portal: "Portal",
    login: "Sign In",
    logout: "Sign Out",
    dashboard: "Dashboard",
    applyNow: "Apply Now",
    visitSchool: "Visit School"
  },
  // Hero
  hero: {
    badge: "American International School",
    title: "Excellence in Education,",
    titleHighlight: "Rooted in Faith",
    subtitle: "Empowering the next generation of African leaders through world-class American education, Christian values, and innovative technology.",
    cta1: "Apply Now",
    cta2: "Explore Programs",
    stats: {
      students: "Students",
      teachers: "Teachers",
      years: "Years of Excellence",
      nationalities: "Nationalities"
    }
  },
  // About
  about: {
    title: "About KCS",
    subtitle: "A Legacy of Excellence Since 1967",
    mission: {
      title: "Our Mission",
      text: "To provide an exceptional American education rooted in Christian values, empowering students in Kinshasa and across the Congo to become servant leaders who transform their communities and the world."
    },
    vision: {
      title: "Our Vision",
      text: "To be the leading international school in Central Africa, recognized for academic excellence, spiritual depth, and the development of globally minded leaders."
    },
    values: {
      title: "Core Values",
      faith: { title: "Faith", desc: "Grounded in Christian principles and values" },
      excellence: { title: "Excellence", desc: "Pursuing the highest academic standards" },
      integrity: { title: "Integrity", desc: "Honesty and character in all we do" },
      community: { title: "Community", desc: "Building meaningful relationships" },
      innovation: { title: "Innovation", desc: "Embracing technology and new ideas" },
      leadership: { title: "Leadership", desc: "Developing servant leaders for Africa" }
    }
  },
  // Academics
  academics: {
    title: "Academic Programs",
    subtitle: "World-Class Curriculum, African Heart",
    programs: {
      elementary: {
        title: "Elementary School",
        grades: "K3-K5",
        desc: "Building a strong foundation through engaging, faith-integrated learning."
      },
      middle: {
        title: "Middle School",
        grades: "Grades 6-8",
        desc: "Navigating adolescence with academic challenge and spiritual growth."
      },
      high: {
        title: "High School",
        grades: "Grades 9-12",
        desc: "Preparing students for top universities worldwide with AP and honors courses."
      }
    },
    curriculum: "American Curriculum",
    accreditation: "Accredited by ACSI"
  },
  // News
  news: {
    title: "News & Events",
    subtitle: "Stay connected with the KCS community",
    readMore: "Read More",
    viewAll: "View All",
    categories: {
      all: "All",
      news: "News",
      events: "Events",
      announcements: "Announcements",
      achievements: "Achievements"
    }
  },
  // Admissions
  admissions: {
    title: "Admissions",
    subtitle: "Join the KCS Family",
    steps: {
      title: "Application Process",
      apply: { title: "Submit Application", desc: "Complete the online application form" },
      docs: { title: "Upload Documents", desc: "Submit required academic records" },
      interview: { title: "Interview", desc: "Meet with our admissions team" },
      decision: { title: "Decision", desc: "Receive your admission decision" }
    },
    requirements: "Requirements",
    applyOnline: "Apply Online",
    trackApplication: "Track Application"
  },
  admissionsPublic: {
    heroBadge: "Admissions 2025-2026 Now Open",
    heroTitle: "Begin Your",
    heroTitleHighlight: "KCS Journey",
    heroSubtitle: "Kinshasa Christian School welcomes families seeking an excellence-driven, faith-based American education for their children.",
    applyNow: "Apply Now",
    viewPrograms: "View Programs",
    programsTitle: "Available Programs",
    programsSubtitle: "Spaces available for the 2025-2026 academic year",
    spotsRemaining: "{{count}} spots remaining",
    processTitle: "Admission Process",
    processSubtitle: "Six simple steps to joining KCS",
    stepLabel: "Step {{num}}",
    steps: {
      1: { title: "Submit Application", desc: "Complete the online form with student and family details." },
      2: { title: "Document Review", desc: "Our admissions team reviews transcripts, recommendation letters, and required documents." },
      3: { title: "Entrance Assessment", desc: "Scheduled assessment in English, Math, and general knowledge for new students." },
      4: { title: "Parent Interview", desc: "A meeting with the Principal and Admissions Director to discuss school fit and expectations." },
      5: { title: "Admission Decision", desc: "You will receive a decision within 5-10 business days via email." },
      6: { title: "Enrollment & Registration", desc: "Complete enrollment forms, pay registration fees, and join the KCS family!" }
    },
    requirementsTitle: "Required Documents",
    requirementsSubtitle: "Please prepare the following documents before beginning your application.",
    requirements: [
      "Completed online application form",
      "Birth certificate",
      "Previous school transcript",
      "Parent or guardian contact information",
      "Requested class level",
      "Additional comments for the admissions team"
    ],
    keyDatesTitle: "Key Dates 2025-2026",
    keyDates: [
      { date: "Now - Jun 30", label: "Applications Open" },
      { date: "Jul 1 - Jul 15", label: "Entrance Assessments" },
      { date: "Jul 20", label: "Decisions Released" },
      { date: "Aug 1 - Aug 15", label: "Enrollment Period" },
      { date: "Aug 25", label: "First Day of School" }
    ],
    applicationTitle: "Online Application",
    applicationSubtitle: "Complete all sections to submit your application."
  },
  // Portal
  portal: {
    student: {
      title: "Student Portal",
      welcome: "Welcome back",
      dashboard: "Dashboard",
      grades: "My Grades",
      assignments: "Assignments",
      timetable: "Timetable",
      aiTutor: "AI Tutor"
    },
    parent: {
      title: "Parent Portal",
      dashboard: "Dashboard",
      performance: "Performance",
      messages: "Messages",
      notifications: "Notifications"
    },
    admin: {
      title: "Admin Panel",
      students: "Students",
      teachers: "Teachers",
      courses: "Courses",
      admissions: "Admissions",
      analytics: "Analytics",
      settings: "Settings"
    }
  },
  roles: {
    admin: "Administrator",
    staff: "Administrative Staff",
    teacher: "Teacher",
    student: "Student",
    parent: "Parent"
  },
  portalNav: {
    dashboard: "Dashboard",
    myGrades: "My Grades",
    assignments: "Assignments",
    timetable: "Timetable",
    aiTutor: "AI Tutor",
    studentForum: "Student Forum",
    parentForum: "Parent Forum",
    messages: "Messages",
    myProfile: "My Profile",
    profile: "Profile",
    performance: "Performance",
    calendar: "Calendar",
    fees: "Fees",
    myCourses: "My Courses",
    students: "Students",
    parents: "Parents",
    teachers: "Teachers",
    attendance: "Attendance",
    gradebook: "Gradebook",
    reports: "Reports",
    disciplineReport: "Discipline Report",
    records: "Records",
    admissions: "Admissions",
    announcements: "Announcements",
    feeTracking: "Fee Tracking",
    permissions: "Permissions",
    transcripts: "Transcripts",
    communications: "Communications",
    staffAttendance: "Staff Attendance",
    discipline: "Discipline",
    courses: "Courses",
    finance: "Finance",
    newsEvents: "News & Events",
    media: "Media",
    parentAiReport: "Parent AI Report",
    studentAiReport: "Student AI Report",
    aiAnalytics: "AI Analytics",
    settings: "Settings"
  },
  // AI
  ai: {
    chat: {
      title: "KCS Assistant",
      subtitle: "Ask me anything about KCS",
      placeholder: "Ask a question...",
      thinking: "Thinking...",
      greeting: "Hello! I'm the KCS AI Assistant. How can I help you today? I can answer questions about admissions, academics, schedules, and more."
    },
    tutor: {
      title: "AI Tutor",
      subtitle: "Personalized learning support",
      start: "Start a Session",
      subject: "Choose a Subject"
    }
  },
  // Contact
  contact: {
    title: "Contact Us",
    subtitle: "We'd love to hear from you",
    address: "Address",
    phone: "Phone",
    email: "Email",
    hours: "Office Hours",
    form: {
      name: "Full Name",
      email: "Email Address",
      subject: "Subject",
      message: "Message",
      send: "Send Message",
      success: "Message sent successfully!"
    }
  },
  // Auth
  auth: {
    signIn: "Sign In",
    signUp: "Sign Up",
    email: "Email Address",
    password: "Password",
    forgotPassword: "Forgot Password?",
    rememberMe: "Remember me",
    orContinueWith: "Or continue with",
    google: "Continue with Google",
    noAccount: "Don't have an account?",
    hasAccount: "Already have an account?"
  },
  // Common
  common: {
    loading: "Loading...",
    error: "An error occurred",
    retry: "Try Again",
    save: "Save",
    cancel: "Cancel",
    delete: "Delete",
    edit: "Edit",
    view: "View",
    search: "Search",
    filter: "Filter",
    sort: "Sort",
    download: "Download",
    upload: "Upload",
    submit: "Submit",
    back: "Back",
    next: "Next",
    previous: "Previous",
    close: "Close",
    confirm: "Confirm",
    darkMode: "Dark Mode",
    lightMode: "Light Mode",
    language: "Language",
    mainWebsite: "Main Website",
    notifications: "Notifications",
    profile: "Profile",
    settings: "Settings",
    noData: "No data available",
    seeAll: "See All"
  }
};
const fr = {
  nav: {
    home: "Accueil",
    about: "À propos",
    academics: "Programmes académiques",
    news: "Actualités et événements",
    admissions: "Admissions",
    gallery: "Galerie",
    contact: "Contact",
    portal: "Portail",
    login: "Se connecter",
    logout: "Se déconnecter",
    dashboard: "Tableau de bord",
    applyNow: "Postuler maintenant",
    visitSchool: "Visiter l'école"
  },
  hero: {
    badge: "École internationale américaine",
    title: "L'excellence dans l'éducation,",
    titleHighlight: "enracinée dans la foi",
    subtitle: "Former la prochaine génération de leaders africains grâce à une éducation américaine de classe mondiale, à des valeurs chrétiennes et à une technologie innovante.",
    cta1: "Postuler maintenant",
    cta2: "Découvrir les programmes",
    stats: {
      students: "Élèves",
      teachers: "Enseignants",
      years: "Années d'excellence",
      nationalities: "Nationalités"
    }
  },
  about: {
    title: "À propos de KCS",
    subtitle: "Un héritage d'excellence depuis 1967",
    mission: {
      title: "Notre mission",
      text: "Offrir une éducation américaine exceptionnelle, ancrée dans les valeurs chrétiennes, afin de permettre aux élèves de Kinshasa et du Congo de devenir des leaders serviteurs qui transforment leurs communautés et le monde."
    },
    vision: {
      title: "Notre vision",
      text: "Être l'école internationale de référence en Afrique centrale, reconnue pour son excellence académique, sa profondeur spirituelle et le développement de leaders ouverts sur le monde."
    },
    values: {
      title: "Valeurs fondamentales",
      faith: { title: "Foi", desc: "Ancrés dans les principes et les valeurs chrétiennes" },
      excellence: { title: "Excellence", desc: "Viser les plus hauts standards académiques" },
      integrity: { title: "Intégrité", desc: "Agir avec honnêteté et caractère dans tout ce que nous faisons" },
      community: { title: "Communauté", desc: "Construire des relations solides et significatives" },
      innovation: { title: "Innovation", desc: "Adopter la technologie et les idées nouvelles" },
      leadership: { title: "Leadership", desc: "Former des leaders serviteurs pour l'Afrique" }
    }
  },
  academics: {
    title: "Programmes académiques",
    subtitle: "Un programme international, un cœur africain",
    programs: {
      elementary: {
        title: "Maternelle et primaire",
        grades: "K3-K5",
        desc: "Construire une base solide grâce à un apprentissage engageant, intégré à la foi."
      },
      middle: {
        title: "Collège",
        grades: "Grades 6-8",
        desc: "Accompagner l'adolescence par l'exigence académique et la croissance spirituelle."
      },
      high: {
        title: "Lycée",
        grades: "Grades 9-12",
        desc: "Préparer les élèves aux meilleures universités du monde avec des cours avancés et exigeants."
      }
    },
    curriculum: "Programme américain",
    accreditation: "Accrédité par l'ACSI"
  },
  news: {
    title: "Actualités et événements",
    subtitle: "Restez connectés à la communauté KCS",
    readMore: "Lire la suite",
    viewAll: "Tout voir",
    categories: {
      all: "Tout",
      news: "Actualités",
      events: "Événements",
      announcements: "Annonces",
      achievements: "Réalisations"
    }
  },
  admissions: {
    title: "Admissions",
    subtitle: "Rejoignez la famille KCS",
    steps: {
      title: "Processus d'admission",
      apply: { title: "Soumettre la demande", desc: "Remplir le formulaire en ligne" },
      docs: { title: "Téléverser les documents", desc: "Soumettre les dossiers scolaires requis" },
      interview: { title: "Entretien", desc: "Rencontrer notre équipe d'admissions" },
      decision: { title: "Décision", desc: "Recevoir la décision d'admission" }
    },
    requirements: "Conditions",
    applyOnline: "Postuler en ligne",
    trackApplication: "Suivre ma candidature"
  },
  admissionsPublic: {
    heroBadge: "Admissions 2025-2026 ouvertes",
    heroTitle: "Commencez votre",
    heroTitleHighlight: "parcours KCS",
    heroSubtitle: "Kinshasa Christian School accueille les familles qui recherchent une éducation américaine d'excellence, fondée sur la foi, pour leurs enfants.",
    applyNow: "Postuler maintenant",
    viewPrograms: "Voir les programmes",
    programsTitle: "Programmes disponibles",
    programsSubtitle: "Places disponibles pour l'année scolaire 2025-2026",
    spotsRemaining: "{{count}} places restantes",
    processTitle: "Processus d'admission",
    processSubtitle: "Six étapes simples pour rejoindre KCS",
    stepLabel: "Étape {{num}}",
    steps: {
      1: { title: "Soumettre la demande", desc: "Remplissez le formulaire en ligne avec les informations de l'élève et de la famille." },
      2: { title: "Vérification des documents", desc: "Notre équipe d'admission examine les bulletins, recommandations et documents requis." },
      3: { title: "Évaluation d'entrée", desc: "Évaluation planifiée en anglais, mathématiques et culture générale pour les nouveaux élèves." },
      4: { title: "Entretien avec les parents", desc: "Rencontre avec la direction pour discuter de l'adaptation à l'école et des attentes." },
      5: { title: "Décision d'admission", desc: "Vous recevez une décision sous 5 à 10 jours ouvrables par e-mail." },
      6: { title: "Inscription finale", desc: "Complétez les formulaires, réglez les frais d'inscription et rejoignez la famille KCS." }
    },
    requirementsTitle: "Documents requis",
    requirementsSubtitle: "Préparez les documents suivants avant de commencer votre candidature.",
    requirements: [
      "Formulaire de candidature en ligne complété",
      "Acte de naissance",
      "Bulletin ou relevé scolaire précédent",
      "Coordonnées du parent ou tuteur",
      "Niveau de classe demandé",
      "Commentaires supplémentaires pour l'équipe des admissions"
    ],
    keyDatesTitle: "Dates clés 2025-2026",
    keyDates: [
      { date: "Maintenant - 30 juin", label: "Candidatures ouvertes" },
      { date: "1er juillet - 15 juillet", label: "Évaluations d'entrée" },
      { date: "20 juillet", label: "Décisions publiées" },
      { date: "1er août - 15 août", label: "Période d'inscription" },
      { date: "25 août", label: "Premier jour de classe" }
    ],
    applicationTitle: "Candidature en ligne",
    applicationSubtitle: "Complétez toutes les sections pour soumettre votre candidature."
  },
  portal: {
    student: {
      title: "Portail élève",
      welcome: "Bienvenue",
      dashboard: "Tableau de bord",
      grades: "Mes notes",
      assignments: "Devoirs",
      timetable: "Emploi du temps",
      aiTutor: "Tuteur IA"
    },
    parent: {
      title: "Portail parent",
      dashboard: "Tableau de bord",
      performance: "Résultats",
      messages: "Messages",
      notifications: "Notifications"
    },
    admin: {
      title: "Panneau d'administration",
      students: "Élèves",
      teachers: "Enseignants",
      courses: "Cours",
      admissions: "Admissions",
      analytics: "Analyses",
      settings: "Paramètres"
    }
  },
  roles: {
    admin: "Administrateur",
    staff: "Personnel administratif",
    teacher: "Enseignant",
    student: "Élève",
    parent: "Parent"
  },
  portalNav: {
    dashboard: "Tableau de bord",
    myGrades: "Mes notes",
    assignments: "Devoirs",
    timetable: "Emploi du temps",
    aiTutor: "Tuteur IA",
    studentForum: "Forum des élèves",
    parentForum: "Forum des parents",
    messages: "Messages",
    myProfile: "Mon profil",
    profile: "Profil",
    performance: "Résultats",
    calendar: "Calendrier",
    fees: "Frais scolaires",
    myCourses: "Mes cours",
    students: "Élèves",
    parents: "Parents",
    teachers: "Enseignants",
    attendance: "Présences",
    gradebook: "Carnet de notes",
    reports: "Rapports",
    disciplineReport: "Rapport disciplinaire",
    records: "Dossiers",
    admissions: "Admissions",
    announcements: "Annonces",
    feeTracking: "Suivi des frais",
    permissions: "Permissions",
    transcripts: "Bulletins",
    communications: "Communications",
    staffAttendance: "Présence du personnel",
    discipline: "Discipline",
    courses: "Cours",
    finance: "Finances",
    newsEvents: "Actualités et événements",
    media: "Médias",
    parentAiReport: "Rapport IA parents",
    studentAiReport: "Rapport IA élèves",
    aiAnalytics: "Analyses IA",
    settings: "Paramètres"
  },
  ai: {
    chat: {
      title: "Assistant KCS",
      subtitle: "Posez-moi vos questions sur KCS",
      placeholder: "Posez une question...",
      thinking: "Réflexion en cours...",
      greeting: "Bonjour ! Je suis l'assistant IA de KCS. Comment puis-je vous aider aujourd'hui ? Je peux répondre aux questions sur les admissions, les programmes, les horaires et bien plus encore."
    },
    tutor: {
      title: "Tuteur IA",
      subtitle: "Soutien personnalisé à l'apprentissage",
      start: "Démarrer une session",
      subject: "Choisir une matière"
    }
  },
  contact: {
    title: "Contactez-nous",
    subtitle: "Nous serions ravis de vous lire",
    address: "Adresse",
    phone: "Téléphone",
    email: "E-mail",
    hours: "Heures de bureau",
    form: {
      name: "Nom complet",
      email: "Adresse e-mail",
      subject: "Sujet",
      message: "Message",
      send: "Envoyer le message",
      success: "Message envoyé avec succès !"
    }
  },
  auth: {
    signIn: "Se connecter",
    signUp: "S'inscrire",
    email: "Adresse e-mail",
    password: "Mot de passe",
    forgotPassword: "Mot de passe oublié ?",
    rememberMe: "Se souvenir de moi",
    orContinueWith: "Ou continuer avec",
    google: "Continuer avec Google",
    noAccount: "Vous n'avez pas de compte ?",
    hasAccount: "Vous avez déjà un compte ?"
  },
  common: {
    loading: "Chargement...",
    error: "Une erreur est survenue",
    retry: "Réessayer",
    save: "Enregistrer",
    cancel: "Annuler",
    delete: "Supprimer",
    edit: "Modifier",
    view: "Voir",
    search: "Rechercher",
    filter: "Filtrer",
    sort: "Trier",
    download: "Télécharger",
    upload: "Importer",
    submit: "Soumettre",
    back: "Retour",
    next: "Suivant",
    previous: "Précédent",
    close: "Fermer",
    confirm: "Confirmer",
    darkMode: "Mode sombre",
    lightMode: "Mode clair",
    language: "Langue",
    mainWebsite: "Site principal",
    notifications: "Notifications",
    profile: "Profil",
    settings: "Paramètres",
    noData: "Aucune donnée disponible",
    seeAll: "Tout voir"
  }
};
const getStoredLanguage = () => {
  var _a2;
  try {
    const stored = localStorage.getItem("kcs-ui");
    if (!stored) return "en";
    const language = (_a2 = JSON.parse(stored).state) == null ? void 0 : _a2.language;
    return language === "fr" ? "fr" : "en";
  } catch {
    return "en";
  }
};
instance.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    fr: { translation: fr }
  },
  lng: getStoredLanguage(),
  fallbackLng: "en",
  interpolation: {
    escapeValue: false
  }
});
function registerPwa() {
  if (!("serviceWorker" in navigator)) return;
  window.addEventListener("load", () => {
    const baseUrl = "/kcs-nexus-demo/";
    navigator.serviceWorker.register(`${baseUrl}sw.js`).catch(() => void 0);
  });
}
const queryClient = new QueryClient();
const routerBasePath = getBasePath();
registerPwa();
client.createRoot(document.getElementById("root")).render(
  /* @__PURE__ */ jsxRuntimeExports.jsx(React$2.StrictMode, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsxRuntimeExports.jsx(BrowserRouter, { basename: routerBasePath, children: /* @__PURE__ */ jsxRuntimeExports.jsx(App, {}) }) }) })
);
export {
  API_BASE as A,
  admissionsAPI as a,
  useAuthStore as b,
  contactAPI as c,
  authAPI as d,
  useUIStore as e,
  aiAPI as f,
  getAssetUrl as g,
  registryAPI as r,
  studentsAPI as s,
  useTranslation as u
};
