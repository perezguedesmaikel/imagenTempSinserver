import React, {useState} from "react";

function Create() {
    const [title,setTitle]=useState('');
    const [author,setAuthor]=useState('');
    const [cover,setCover]=useState('');
    const [intro,setIntro]=useState('');
    const [completed,setCompleted]=useState(false);
    const [review,setReview]=useState('');
    function handleChange(e) {
        const name=e.target.name;
        const value=e.target.value;
        switch (name) {
            case 'title':setTitle(value);
            break;
            case 'author':setAuthor(value);
            break;
            case 'intro':setIntro(value);
                break;
            case 'completed':setCompleted(value);
                break;
            case 'review':setReview(value);
                break;
        }
    }
    function handleChangeFile(e) {
        const element=e.target;
        const file=element.files[0];
        const reader=new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend=function () {
            setCover(reader.result.toString());

        };


    }
    function handleSubmit(e) {
        e.preventDefault();
        const newBook={
            id:crypto.randomUUID(),
            title,
            author,
            cover,
            intro,
            completed,
            review,
        }
        console.log('Probando submit');
    }
    return(
        <div >
            <form onSubmit={handleSubmit} >
                <div id={'prueba'} className='border'>
                    <div>Title</div>
                    <input type='text' name={'title'} onChange={handleChange} placeholder={'title'}/>
                </div>
                <div>
                    <div>Author</div>
                    <input type='text' name={'author'} onChange={handleChange} placeholder={'author'}/>
                </div>
                <div>
                    <div>Cover</div>
                    <input type='file' name={'cover'} onChange={handleChangeFile} placeholder={'cover'}/>
                    <div>{!!cover?<img src={cover} width={'200px'} alt='preview'/>:''}</div>
                </div>
                <div>
                    <div>
                        <div>Introduction</div>
                        <input type='text' name={'intro'} onChange={handleChange} placeholder={'introduction'}/>
                    </div>
                    <div>
                        <div>Completed</div>
                        <input type='checkbox' name={'completed'} onChange={handleChange} placeholder={'completed'}/>
                    </div>
                    <div>
                        <div>Review</div>
                        <input type='text' name={'review'} onChange={handleChange} placeholder={'review'}/>
                    </div>
                </div>
                <input type='submit' value={'Registrar Libro'}/>
            </form>
        </div>

    )

}
export default Create;