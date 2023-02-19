export interface Pet {
    _id: string
    name: string
    age: number
    birthDate: Date
}

export interface PetFilter {
    term: string
}
// _id: 'p123', name: 'Penrose', age: 2, birthDate: new Date('2020-11-12')