import { isMotionValue } from './utils/is-motion-value.mjs';
import { useIsomorphicLayoutEffect } from '../utils/use-isomorphic-effect.mjs';

function useOnChange(value, callback) {
    useIsomorphicLayoutEffect(() => {
        if (isMotionValue(value))
            return value.onChange(callback);
    }, [callback]);
}
function useMultiOnChange(values, handler) {
    useIsomorphicLayoutEffect(() => {
        const subscriptions = values.map((value) => value.onChange(handler));
        return () => subscriptions.forEach((unsubscribe) => unsubscribe());
    });
}

export { useMultiOnChange, useOnChange };
