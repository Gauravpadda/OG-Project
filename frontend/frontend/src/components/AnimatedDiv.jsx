import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export function AnimatedDiv() {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const xSpring = useSpring(x);
    const ySpring = useSpring(y);

    const rotateX = useTransform(ySpring, [-0.5, 0.5], ["-10.5deg", "10.5deg"]);
    const rotateY = useTransform(xSpring, [-0.5, 0.5], ["-10.5deg", "10.5deg"]);

    function movementHandler(event) {
        // This gives the size of the element
        const size = event.target.getBoundingClientRect();
        const height = size.height;
        const width = size.width;

        // Getting the position of mouse from the starting
        const mouseXPos = event.clientX - size.left;
        const mouseYPos = event.clientY - size.top;

        const xPercent = mouseXPos / width - 0.5; // to get median 0
        const yPercent = mouseYPos / height - 0.5;

        x.set(xPercent);
        y.set(yPercent);
    }

    return (
        <motion.div
            onMouseMove={movementHandler}

            onMouseLeave={()=>{
                x.set(0);
                y.set(0);
            }}
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
            }}
            className="h-full w-full rounded-2xl bg-gradient-to-br from-indigo-200 to-violet-200 relative "
        >
            <div
                style={{
                    transformStyle: "preserve-3d",
                    transform: "translateZ(105px)"
                }}
                className="absolute inset-4 rounded-xl bg-indigo-400 hover:scale-110"
            >
                hello
            </div>
        </motion.div>
    );
}
