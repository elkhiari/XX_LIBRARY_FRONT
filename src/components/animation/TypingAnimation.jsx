import { TypeAnimation } from "react-type-animation";

const TypingHeader = () => {
    return (
            <h1 className="text-4xl font-bold text-gray-800 dark:text-slate-50 syne mb-4">
            <TypeAnimation
                cursor={true}
                sequence={[
                    "Welcome to Bookstore.",
                    1000,
                    "Welcome to XX Library.",
                    1000,
                ]}
                repeat={Infinity}
                speed={10}
            />
            </h1>
    );
};

export {TypingHeader};