import { useEffect, useRef } from "react";
import { FabricJSCanvas } from "fabricjs-react";

const Canvas = () => {
    const ref = useRef();

    const handleOnReady = (canvas) => {
        ref.current = canvas;
        // set styling in here
    }

    // useEffect to see if current canvas exists already
    useEffect(() => {
        return () => {
            // Dispose canvas
            if (ref.current) {
                ref.current.dispose();
            }
        };
    }, []);

    return <FabricJSCanvas onReady={handleOnReady} />;
};

export default Canvas;
