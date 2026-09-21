import { useEffect, useState } from "react";

export function useLocalStorage(key, initialValue) {
    // 1. Tạo state value.
    // 2. Lần đầu: đọc localStorage theo key.
    // 3. Khi value hoặc key đổi: lưu value vào localStorage.
    // 4. Return [value, setValue].

    const [value, setValue] = useState(() => {
        const item = window.localStorage.getItem(key);
        return item ? JSON.parse(item) : initialValue;
    });

    useEffect(() => {
        window.localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);

    return [value, setValue];
}