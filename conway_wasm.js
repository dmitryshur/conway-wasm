
                /* tslint:disable */
                import * as wasm from './conway_wasm_bg';
                

                
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

                