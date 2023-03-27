import { memo, Fragment, useState } from 'react'
import chatServices from '../../../../services/chat_services/chat-services';
const Chatfooter = memo(({ sendMessage, loadMessage }) => {
    const [message, setMessage] = useState('');
    const [uploadingFiles, setUploadingFiles] = useState([]);

    const handleMessageChange = (e) => {

        if (e.target.value) {
            setMessage(e.target.value)
        } else {
            return null;
        }
    }
    const handleSendMessage = async (message) => {
        if (message) {
            sendMessage(message).then(async (response) => {
                console.log(response, uploadingFiles)
                console.log(uploadingFiles.length)

                if (response) {
                    if (uploadingFiles) {
                        let imageUploaded = await uploadImages(response);
                        console.log("imageUploaded", imageUploaded)
                        loadMessage();
                        setMessage('')
                    } else {
                        setMessage('')
                    }

                }

            }).catch(err => {
                console.log(err)
            })
        }

    }
    const uploadImages = (messageId) => {
        return new Promise((resolve, reject) => {
            const formData = new FormData();
            if (uploadingFiles.length > 0) {
                for (let i = 0; i <= uploadingFiles.length; i++) {
                    if (uploadingFiles[i]) {
                        formData.append("upl", uploadingFiles[i]);
                    }

                    if (i === uploadingFiles.length - 1) {
                        chatServices.uploadChatImages(messageId, formData).then(response => {
                            resolve(true)
                        }).catch(err => {
                            console.log(err)
                        })

                    }
                }
            } else {
                resolve(true)
            }
        })

    }
    const handleUploader = (e) => {

        setUploadingFiles(oldArray => [...oldArray, ...e.target.files]);

    }
    return (
        <Fragment>
            <div className="card-footer px-3 py-3 border-top rounded-0">
                <form onSubmit={(e) => {
                    e.preventDefault();
                    handleSendMessage(message)
                }}>
                    <div className="input-group">
                        <input type="text" className="form-control chat-input" value={message} onChange={handleMessageChange} placeholder="Write a message" aria-label="Recipient's username" />
                        <>
                            <label htmlFor={"upload-button"}>
                                <span className="input-group-text mgs-icon attachment-icon">
                                    <svg width="19" viewBox="0 0 19 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5.15518 17.0987L13.1405 8.64034C13.66 8.09001 13.66 7.19775 13.1405 6.64743C12.6209 6.0971 11.7785 6.0971 11.259 6.64742L1.77933 16.6887C0.740224 17.7893 0.740225 19.5738 1.77933 20.6745C2.81843 21.7752 4.50314 21.7752 5.54225 20.6745L16.831 8.717C18.3897 7.06601 18.3897 4.38923 16.831 2.73824C15.2724 1.08725 12.7453 1.08725 11.1866 2.73824L3.55224 10.8249" stroke="currentcolor" strokeWidth="2" strokeLinecap="round"></path>
                                    </svg>
                                </span>
                            </label></>
                        <input
                            id="upload-button"
                            type="file"
                            name="myImage"
                            accept="image/*"
                            style={{ display: 'none' }}
                            onChange={(e) => { handleUploader(e) }}
                            multiple
                        />
                        <span onClick={() => {
                            handleSendMessage(message)
                        }} className="input-group-text mgs-icon send-icon">
                            <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.8325 6.67463L8.10904 12.4592L1.59944 8.38767C0.66675 7.80414 0.860765 6.38744 1.91572 6.07893L17.3712 1.55277C18.3373 1.26963 19.2326 2.17283 18.9456 3.142L14.3731 18.5868C14.0598 19.6432 12.6512 19.832 12.0732 18.8953L8.10601 12.4602" stroke="currentcolor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                            </svg>
                        </span>
                    </div>
                </form>
            </div>
        </Fragment>
    )
})
Chatfooter.displayName = "Chatfooter"
export default Chatfooter