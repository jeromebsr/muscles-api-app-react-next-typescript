'use client'
import Navbar from "@components/Navbar"
import Hero from "@components/Hero"
import Searchbar from "@components/Searchbar"
import { fetchExercices } from "@utils"
import { HomeProps } from '@types'
import ExcercisesList from "@components/ExcercisesList"

export default async function Home({ searchParams }: HomeProps) {

  const AllExercises = await fetchExercices({
    difficulty: searchParams.difficulty || "",
    muscle: searchParams.muscle || ""
  })

  const isDataEmpty = !Array.isArray(AllExercises) || AllExercises.length < 1 || !AllExercises
  
  return (
    <>
      <Navbar />
      <Hero />
      <Searchbar />
      <ExcercisesList isDataEmpty={isDataEmpty} allExercises={AllExercises} />
    </>
  )
}
