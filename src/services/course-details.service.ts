import { useState, useEffect } from "react";
import { authApi } from "./api";
import { Course } from "../types/course";

export const useCourseDetails = (id: string) => {
    const [courseData, setCourseData] = useState<Course | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchCourseData = async () => {
            try {
                setIsLoading(true);
                const response = await authApi.get(`/courses/${id}`);
                console.log("Полученные данные курса:", response.data);
                setCourseData(response.data);
            } catch (error: any) {
                setError(
                    error.response?.data?.message || error.message || "Ошибка при загрузке данных курса"
                );
                setIsLoading(false);
            }
        };

        fetchCourseData();
    }, [id]);

    return { courseData, isLoading, error };
};
