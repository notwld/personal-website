import sync, { cancelSync } from 'framesync';
import { useRef, useContext, useEffect } from 'react';
import { MotionConfigContext } from '../context/MotionConfigContext.mjs';

function useAnimationFrame(callback) {
    const initialTimestamp = useRef(0);
    const { isStatic } = useContext(MotionConfigContext);
    useEffect(() => {
        if (isStatic)
            return;
        const provideTimeSinceStart = ({ timestamp }) => {
            if (!initialTimestamp.current)
                initialTimestamp.current = timestamp;
            callback(timestamp - initialTimestamp.current);
        };
        sync.update(provideTimeSinceStart, true);
        return () => cancelSync.update(provideTimeSinceStart);
    }, [callback]);
}

export { useAnimationFrame };
