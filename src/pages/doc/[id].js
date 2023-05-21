import TextEditor from "../../components/TextEditor"
import { Button, Icon } from "@material-ui/core"
import { useRouter } from "next/router"
import "../../../styles.css"

function Doc() {
    const router = useRouter()
    const { id } = router.query

    return (
        <div>
            <header className="flex justify-between items-center p-3 pb-1">
                <span onClick={() => router.push('/')} className="cursor-pointer">
                    <Icon className="text-blue-500" style={{ fontSize: "2.25rem" }}>
                        description
                    </Icon>
                </span>

                <div>
                    <div className="flex item-center text-sm space-x-1 -ml-1 h-8 text-gray-600">
                        <p>File</p>
                        <p>Edit</p>
                        <p>View</p>
                        <p>Insert</p>
                        <p>Format</p>
                        <p>Tools</p>
                    </div>
                </div>

                <img
                    loading='lazy'
                    className='cursor-pointer h-8 w-8 rounded-full ml-5'
                    src="https://lh3.googleusercontent.com/ogw/AOLn63G6qwBkXh20ovWB1oghlKm0NSuCoUSwDsjDk0jIdw=s32-c-mo"
                />
            </header>

            <TextEditor />
        </div>
    )
}

export default Doc