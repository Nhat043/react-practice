import { useState, useEffect } from 'react';


export default function UserList() {

    const [user, setUser] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const controller = new AbortController();
        function fetchData() {
            fetch('https://jsonplaceholder.typicode.com/users', { signal: controller.signal })
                .then((response) => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then((data) => {
                    setUser(data);
                    setIsLoading(false);
                })
                .catch((error) => {
                    if (controller.signal.aborted) {
                        return;
                    }
                    setError(error);
                })
                .finally(() => {
                    if (!controller.signal.aborted) {
                        setIsLoading(false);
                    }
                });

        }
        fetchData();
        return () => {
            controller.abort();
        };
    }, []);

    if (isLoading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error.message}</p>;
    }

    return (
        <ul>
            {user.map((user) => (
                <li key={user.id}>{user.name}</li>
            ))}
        </ul>
    );
}