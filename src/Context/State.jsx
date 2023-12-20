import React, { useState, useEffect } from 'react'
import Context from './Context'
import api from '../Services/api'

const State = (props) => {


    const [projects, setProjects] = useState([])
    const [loading, setLoading] = useState(false)


    // <--fetch project-->

    const fetchProject = async () => {

        setLoading(true)

        const res = await api.get('/api/projects')

        setProjects(res?.data)

        setLoading(false)
    }

   
    useEffect(() => {
        fetchProject()
      
    }, [])

    const handelDarkMode = (prop) => {
        if (prop === true) {
            setModeStyle({
                bgColor: "rgb(60 60 60)",
                textColor: '#f1f1f1',
                boxShadow: '0px 5px 4px 0px rgba(162, 208, 230, 0.137)',
                mode: "dark"
            })
            document.body.style.backgroundColor = 'rgb(60 60 60)'
        }
        else {
            setModeStyle({
                bgColor: '#f8f9fa',
                textColor: 'rgb(60 60 60)',
                boxShadow: '0px 5px 4px 0px rgba(35, 83, 105, 0.137)',
                mode: 'light'
            })
            document.body.style.backgroundColor = 'white'
        }
    }
    const [modeStyle, setModeStyle] = useState({ bgColor: '#f8f9fa', textColor: "#000", boxShadow: "0px 5px 4px 0px rgba(35, 83, 105, 0.137)", mode: "light" })

    return (
        <Context.Provider value={{ handelDarkMode, modeStyle, setProjects, projects}} >
            {props.children}
        </Context.Provider>
    )
}

export default State;