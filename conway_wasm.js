
                /* tslint:disable */
                import * as wasm from './conway_wasm_bg';
                

                export class Universe {

                    constructor(ptr) {
                        this.ptr = ptr;
                    }
                
                free() {
                    const ptr = this.ptr;
                    this.ptr = 0;
                    wasm.__wbg_universe_free(ptr);
                }
            tick () {
        const ret = wasm.universe_tick(this.ptr);
                return ret;
            }
static new () {
        const ret = wasm.universe_new();
                return new Universe(ret);
                            
            }
width () {
        const ret = wasm.universe_width(this.ptr);
                return ret;
            }
height () {
        const ret = wasm.universe_height(this.ptr);
                return ret;
            }
cells () {
        const ret = wasm.universe_cells(this.ptr);
                return ret;
            }
toggle_cell (arg0, arg1) {
        const ret = wasm.universe_toggle_cell(this.ptr, arg0, arg1);
                return ret;
            }
}

                const TextDecoder = typeof window === 'object' && window.TextDecoder
                    ? window.TextDecoder
                    : require('util').TextDecoder;
            
            let cachedDecoder = new TextDecoder('utf-8');
        
            let cachedUint8Memory = null;
            function getUint8Memory() {
                if (cachedUint8Memory === null ||
                    cachedUint8Memory.buffer !== wasm.memory.buffer)
                    cachedUint8Memory = new Uint8Array(wasm.memory.buffer);
                return cachedUint8Memory;
            }
        
            function getStringFromWasm(ptr, len) {
                return cachedDecoder.decode(getUint8Memory().slice(ptr, ptr + len));
            }
        export function __wbindgen_throw (ptr, len) {
                        throw new Error(getStringFromWasm(ptr, len));
                    }

                