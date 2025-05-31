import React from "react";

const Footer: React.FC = () => {
    return (
        <section className="bottom-0 w-full bg-[rgba(10, 10, 10, 0.8)] backdrop-blur-lg border-t border-white/10 shadow-lg">
            <div className="flex justify-between items-center h-10 text-center">
                <div className="w-full flex justify-center">
                    <small className="text-sm text-gray-400 text-center">
                        &copy; {new Date().getFullYear()}. Momena. All rights reserved.
                    </small>
                </div>
            </div>
        </section>
    );
}
export default Footer;