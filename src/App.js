import React, { useState, useEffect } from 'react';
import { Route, Switch, withRouter } from "react-router-dom";
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './components/Home'
import Work from './components/Work'
import './App.css'

function App () {
  const [projects, setProjects] = useState(null)

  useEffect(() => {
    fetchAll()
  }, [])

  const fetchAll = async () => {
    const key = 'keyWviNJiEc3mUgXV'
    const url = 'https://api.airtable.com/v0/appa3x0Ddhl3fU1h9/Table%201%20/'

    const resp = await fetch (url, {
        headers: {
          Authorization: `Bearer ${key}`
        }
      })

    const data = await resp.json()
    setProjects(data.records)
  }

  return (
    <div className='App'>
    <Navbar />
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/work' render={() => <Work projects={projects}/>}/>
    </Switch>
    <Footer />
  </div>
  )
}

export default withRouter(App)
