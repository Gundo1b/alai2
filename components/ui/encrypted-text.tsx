import React, { useState, useEffect } from "react";

interface EncryptedTextProps {
    text: string;
    encryptedClassName?: string;
    revealedClassName?: string;
    revealDelayMs?: number;
}

const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:,.<>?";

export function EncryptedText({
    text,
    encryptedClassName = "text-neutral-500",
    revealedClassName = "dark:text-white text-black",
    revealDelayMs = 50,
}: EncryptedTextProps) {
    const [displayedText, setDisplayedText] = useState<string>("");
    const [isRevealed, setIsRevealed] = useState<boolean[]>([]);

    useEffect(() => {
        const initialRevealed = new Array(text.length).fill(false);
        setIsRevealed(initialRevealed);
        setDisplayedText(text.split('').map(() => chars[Math.floor(Math.random() * chars.length)]).join(''));

        const timeouts: NodeJS.Timeout[] = [];

        text.split('').forEach((char, index) => {
            const timeout = setTimeout(() => {
                setDisplayedText(prev => {
                    const newText = prev.split('');
                    newText[index] = char;
                    return newText.join('');
                });
                setIsRevealed(prev => {
                    const newRevealed = [...prev];
                    newRevealed[index] = true;
                    return newRevealed;
                });
            }, index * revealDelayMs);

            timeouts.push(timeout);
        });

        return () => {
            timeouts.forEach(clearTimeout);
        };
    }, [text, revealDelayMs]);

    return (
        <span className={revealedClassName}>
            {displayedText.split('').map((char, index) => (
                <span
                    key={index}
                    className={isRevealed[index] ? revealedClassName : encryptedClassName}
                    style={{ transition: 'color 0.2s ease' }}
                >
                    {char}
                </span>
            ))}
        </span>
    );
}
