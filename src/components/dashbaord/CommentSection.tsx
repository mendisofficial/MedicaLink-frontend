import Chiranga from "../../assets/img/patients/Chiranga.jpg";
import Seneli from "../../assets/img/patients/Seneli.jpg";
import Nishadi from "../../assets/img/patients/Nishadi.jpg";
import Skeleton from "@mui/material/Skeleton";
import { useState } from "react";

interface CommentSectionProps {
    className: string
}

export default function CommentSection({ className }: CommentSectionProps) {
    const [isLoading, setIsLoading] = useState<boolean>(true);

    const comments = [
        { id: 1, comment: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit...', date: '10/12/2022 10:05', img: Nishadi },
        { id: 2, comment: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit...', date: '10/12/2022 10:05', img: Chiranga },
        { id: 3, comment: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit...', date: '10/12/2022 10:05', img: Seneli }
    ]

    return (
        <div className={`comment-list ${className}`}>

            {
                isLoading? (
                    Array.from({ length: 3 }).map((item, index: number) => {
                        return (
                            <div className="comment mb-2" key={index}>
        
                                <Skeleton variant="circular" sx={{marginRight:'20px'}} width={50} height={50} />
        
                                <p>
                                    <Skeleton variant="text" sx={{fontSize: '1rem'}} width={260} />
                                    <Skeleton variant="text" sx={{fontSize: '0.8rem'}} width={200} />
                                </p>
                                <div className="controls ms-auto">
                                    <Skeleton variant="text" sx={{fontSize: '0.6rem', marginBottom: '5px'}} width={70} />
                                    <button>
                                        <span className="material-symbols-outlined">
                                            send
                                        </span>
                                    </button>
                                </div>
        
                            </div>
                        );
                    })
                ) : (
                    comments.map(comment => {
                        return (
                            <div className="comment mb-2" key={comment.id}>
        
                                <img src={comment.img} alt="profile-image" />
        
                                <p>
                                    {comment.comment}
                                </p>
                                <div className="controls">
                                    <span className="mb-2">{comment.date}</span>
                                    <button>
                                        <span className="material-symbols-outlined">
                                            send
                                        </span>
                                    </button>
                                </div>
        
                            </div>
                        );
                    })
                )
            }

        </div>
    );
}