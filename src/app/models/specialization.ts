export interface Specialization{
    id: number,
    name: string,
    years_of_study: number
}

export interface TableSpecialization{
    specialization: Specialization,
    next_year: number
}