import classes from './fileslist.module.css'
import PS from '../../assets/img/ps.png'
import PDF from '../../assets/img/pdf.png'

function FilesList(props) {
    let fileListAPI = [
        [PDF, "Fiche technique #", "path"],
        [PDF, "Fiche technique #", "path"],
        [PDF, "Fiche technique #", "path"],
        [PS, "Fiche technique #", "path"],
    ]

    let fileList = []
    for (const [index, value] of fileListAPI.entries()) {
        fileList.push(
            <li key={index} className={classes.file}>
                <img src={value[0]} alt="Télécharger" />
                <div>
                    <span>{value[1]}{index}</span>
                    <a href={value[2]}>Télécharger</a>
                </div>
            </li>
        )
    }
    return (
        <div className={classes.container}>
            <h2>Ressources jointes</h2>
            <ul className={classes.fileList}>
                {fileList}
            </ul>
        </div>
    )
}
export default FilesList;