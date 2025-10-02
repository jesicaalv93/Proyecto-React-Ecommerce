import {useState, useEffect} from 'react';
import categories from '../data/categories.json';
console.log('categorías cargadas:', categories);


export function useGetCategories() {
    const [categoriesList, setCategoriesList] = useState([]);
    const [loading, setLoading] = useState(true);

useEffect(() => {
    const getCategories = () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(categories);
            }, 1000); // Simulate network delay
        });
    };

    getCategories().then((data) => {
        setCategoriesList(data);
        setLoading(false);
    });
}, []);

return {categoriesList, loading};

}