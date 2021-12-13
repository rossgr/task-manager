import React from 'react'
import styles from '../styles/Test.module.css'
import type { NextPage } from 'next'
import { Navbar } from '../components/Navbar/Navbar'
import { ProjectHeader } from '../components/ProjectHeader/ProjectHeader'
import { SearchBar } from '../components/SearchBar/SearchBar'
import { FlexWrapper } from '../components/FlexWrapper/FlexWrapper'
import { TasksManager } from '../components/TasksManager/TasksManager'

const Test: NextPage = () => {
  return (
    <main>
      <Navbar />
      <FlexWrapper className={styles.flexWrapper}>
        <ProjectHeader />
        <SearchBar />
        <TasksManager />
      </FlexWrapper>
    </main>
  )
}

export default Test