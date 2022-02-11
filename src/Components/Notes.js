import Note from './Note';
import { useContext, useState } from 'react'
import TextareaAutosize from '@mui/material/TextareaAutosize';
import Button from '@mui/material/Button';
import noteContext from '../Context/noteContext'
import './Notes.css'
import GifContent from './GifContent';


const Notes = () => {

    const context = useContext(noteContext)
    const { notes, addNote } = context
    const [note, setNote] = useState({ image: "", description: "", id: "" })
    const [imageUrl, setImageUrl] = useState("")
    const [gifStatus, setGifStatus] = useState(false)


    const changeHandler = (e) => {
        setNote({
            image: imageUrl,
            description: e.target.value,
            id: Math.floor(Math.random() * 1000)
        })
    }

    const gifInfo = (url) => {
        setImageUrl(url)
        setGifStatus(false)
    }


    const showGif = () => {
        setGifStatus(true)
    }

    const closeGif = (status) => {
        setGifStatus(status)
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        if (!note.description.length > 0 && !imageUrl) {
            alert("Note can't be empty")
        }
        else {
            addNote(note.description, note.id, imageUrl)
            setImageUrl("")
        }
        setNote({ image: imageUrl, description: "", id: "" })
    }

    return <div className="container">
        <div className="container_input">
            <form>
                {gifStatus && <GifContent gifInfo={gifInfo} closeGif={closeGif} />}
               <div>
                {imageUrl && <img className="container_image" src= {imageUrl} alt=""></img>}
                <TextareaAutosize
                    className="container_textArea"
                    aria-label="minimum height"
                    minRows={10}
                    placeholder="Type Something..."
                    style={{ width: 500 }}
                    value={note.description}
                    onChange={changeHandler}
                />
               </div>
                <div className="container_button">
                    <Button onClick={showGif} className="button" variant="contained">GIF</Button>
                    <Button onClick={handleSubmit} type="submit" className="button" variant="contained">POST</Button>
                </div>
            </form>

        </div>


        <div className="container_card">

            {notes.map((item, key) => {
                if (item.image) {

                    return <Note
                        key={item.id}
                        description={item.description}
                        image={item.image}
                    />
                }
                else {

                    return <Note
                        key={item.id}
                        description={item.description}
                    />
                }
            })}
        </div>
    </div>;
};

export default Notes;
