import { useGetAllSemestersQuery } from "@/redux/features/academicSemester/academicSemesterApi";

export default function AcademicSemester() {

    const { data } = useGetAllSemestersQuery(undefined);
    console.log(data);
    return (
        <div>
            <h1>This is the AcademicSemester component</h1>
        </div>
    );
}