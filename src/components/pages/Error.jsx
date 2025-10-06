import React from 'react';
import { BookOpen } from "lucide-react";

const Error = () => {

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-white to-[#1313130d] text-gray-800 px-6 text-center">
            {/* Logo / Icon */}
            <div className="flex items-center gap-3 mb-6">
                <BookOpen className="w-10 h-10 text-indigo-600" />
                <h1 className="text-3xl font-bold tracking-wide">BookVibe</h1>
            </div>

            {/* 404 Text */}
            <h2 className="text-[100px] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600 leading-none">
                404
            </h2>

            <p className="mt-4 text-lg text-gray-700 max-w-md">
                Oops! The page you’re looking for has gone missing — maybe it’s lost in
                a good book 📚.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex gap-4">
                <a
                    href="/"
                    className="px-6 py-3 bg-[#23BE0A] hover:bg-[#1c9908] text-white font-semibold rounded-xl shadow-md transition"
                >
                    Go Home
                </a>
                <a
                    href="/books"
                    className="px-6 py-3 bg-[#59C6D2] hover:bg-[#43959e] text-white font-semibold rounded-xl transition"
                >
                    Browse Books
                </a>
            </div>

            {/* Decorative Illustration */}
            <div className="mt-12">
                <img
                    src="https://cdn-icons-png.flaticon.com/512/2232/2232688.png"
                    alt="Books illustration"
                    className="w-40 opacity-80 hover:scale-105 transition-transform"
                />
            </div>

            <footer className="mt-10 text-sm text-gray-500">
                © {new Date().getFullYear()} BookVibe. All rights reserved.
            </footer>
        </div>
    );
};

export default Error;