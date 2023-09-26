import { useState, useEffect } from "react";
import "./SelectedContact.css";

export default function SelectedContact({selectedContactId, setSelectedContactId}) {
    const [selectedContact, setSelectedContact] = useState(null);
    
    useEffect(() => {
        async function fetchSelectedContact() {
            try {
                const response = await fetch(`http://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`);
                const result = await response.json();
                setSelectedContact(result);
                console.log(result)
            }
            catch (error) {
                console.error(error)
            }
        }
        if (selectedContactId) {
            fetchSelectedContact();
        }
    },[selectedContactId]);

    const closeButton = () => {
        setSelectedContactId(null);
    }
    
        return (
        <div className="container">
            <h2>Contact Details</h2>
            {selectedContact ? (
                <>
                    <p>Name: {selectedContact.name}</p>
                    <p>Email: {selectedContact.email}</p>
                    <p>Phone: {selectedContact.phone}</p>
                    <button onClick={closeButton}>Close</button>
                </>
            ) : (
                <p className="loading">Loading..</p>
            )}
        </div>
        )
    
}
