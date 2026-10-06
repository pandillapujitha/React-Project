function Surya(props){


    const {aboutSurya} = props
    const {moviescount, salary} = aboutSurya

    const text = `Hi I'm Surya. I acted ${moviescount} movies 
    and my salary per movie is ${salary}`;
    return(
        <h2>{text}</h2>
    )
    }

export default Surya