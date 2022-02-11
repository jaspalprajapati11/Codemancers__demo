import NoteContext from './noteContext'

import React, { useState, useEffect } from 'react';

const NoteState = (props) => {

    const [offset, setOffset] = useState(0)
    const notes = [{
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur deserunt earum rem obcaecati incidunt perspiciatis, ea doloribus quos ex impedit!",
        id: "101"
    },
    {
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur deserunt earum rem obcaecati incidunt perspiciatis, ea doloribus quos ex impedit!",
        id: "102"
    },
    {
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur deserunt earum rem obcaecati incidunt perspiciatis, ea doloribus quos ex impedit!",
        id: "103"
    }]



    const [data, setData] = useState([])
    const updateGif = async () => {

        const api_key="oedEULBOtJqDXlitE2B200LzwkJetf2X&offset"

        try {

            const url = `https://api.giphy.com/v1/gifs/trending?api_key=${api_key}=${offset}`
            let gifData = await fetch(url)
            let parsedData = await gifData.json()
            console.log(parsedData)
            setData(parsedData.data)
        } catch (error) {
            
            console.log(error);
        }
    }

    useEffect(() => {
        updateGif();
        //eslint-disable-next-line
    }, [])


    const myGif =(value)=>{

        let newGif = data.filter((item)=>{

            return item.title.includes(value)
            
        })

        setData(newGif)

    }



    const fetchMoreData = async () => {
        setOffset(offset + 1)
        const url = `https://api.giphy.com/v1/gifs/trending?api_key=oedEULBOtJqDXlitE2B200LzwkJetf2X&offset=${offset + 1}`
        let gifData = await fetch(url)
        let parsedData = await gifData.json()
        setData(data.concat(parsedData.data))
    }

    

    const addNote = (description, id, image) => {

        notes.push({ description, id,image })
    }

    return <NoteContext.Provider value={{ notes, addNote, data, fetchMoreData, myGif }}>
        {props.children}
    </NoteContext.Provider>
};

export default NoteState;
