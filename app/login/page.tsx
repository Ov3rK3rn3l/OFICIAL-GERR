"use client";
import React, { useState } from "react";

function LoginForm() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); 
        if (username === "usuario" && password === "senha") {
            setIsLoggedIn(true);
        } else {
            alert("Credenciais inválidas");
        }
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
        setUsername("");
        setPassword("");
    };

    if (isLoggedIn) {
        return (
            <div>
                <p>Bem-vindo, {username}!</p>
                <button onClick={handleLogout}>Logout</button>
            </div>
        );
    }

    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="bg-gray-400 p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-4">Faça Login</h2>
                <form onSubmit={handleLogin} className="flex flex-col">
                    <div className="mb-4">
                        <label htmlFor="username" className="block mb-2">
                            Usuário:
                        </label>
                        <input
                            type="text"
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="border border-gray-600 rounded px-4 py-2 focus:outline-none focus:border-gray-500"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block mb-2">
                            Senha:
                        </label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="border border-gray-900 rounded px-4 py-2 focus:outline-none focus:border-gray-500"
                        />
                    </div>
                    <button type="submit" className="bg-gray-300 text-black px-4 py-2 rounded">
                        Entrar
                    </button>
                </form>
            </div>
        </div>
    );
}

export default LoginForm;

