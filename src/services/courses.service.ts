import { useState, useEffect } from "react";
import { authApi } from "./api";
import { Course } from "../types/course";
import  CourseWithoutData from "../types/course-without-data"
import { AxiosError, AxiosResponse } from "axios";


export const createCourse = async (course: CourseWithoutData): Promise<AxiosResponse | AxiosError> => {
    try {
        const response = await authApi.post('/courses/', course);
        
        console.log('Course creation status:', response);
        
        return response;
    } catch (error: any) {
        console.error('Course creation error:', error);
        return error as AxiosError;
    }
};

export const useCourses = () => {
    const [courses, setCourses] = useState<Course[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const response = await authApi.get("/courses/");
                console.log("Полученные курсы:", response.data);
                setCourses(response.data);
            } catch (error: any) {
                setError(
                    error.response?.data?.message || error.message || "Ошибка при загрузке курсов"
                );
            } finally {
                setIsLoading(false);
            }
        };

        fetchCourses();
    }, []);

    return { courses, isLoading, error };
};

