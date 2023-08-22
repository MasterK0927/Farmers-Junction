'use client'
import Image from 'next/image'
import React from 'react'
import { useState } from 'react';
import styles from './user.module.css'
import { useSession, signOut } from 'next-auth/react'
import Footer from '../../../components/footer/Footer';

const User = () => {


    const [latitude, setLatitude] = useState(null);
    const [longitude, setLongitude] = useState(null);

    const handleGetLocationClick = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    setLatitude(latitude);
                    setLongitude(longitude);
                },
                (error) => {
                    console.error('Error getting location:', error);
                }
            );
        } else {
            console.error('Geolocation is not supported in this browser.');
        }
    };


    const [firstName, setFirstName] = useState('John');
    const [lastName, setLastName] = useState('Doe');
    const [isEditing, setIsEditing] = useState(false);

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleSaveClick = () => {
        setIsEditing(false);
        // You can add logic here to save the edited names to your backend/database if needed.
    };

    const [phoneNumber, setPhoneNumber] = useState('6204864673');
    const [email, setEmail] = useState('keshav@hello.com');
    const [isEdit, setIsEdit] = useState(false);

    const handleEditingClick = () => {
        setIsEdit(true);
    };

    const handleSavingClick = () => {
        setIsEdit(false);
        // You can add logic here to save the edited names to your backend/database if needed.
    };


    return (
        <div className={styles.userContainer}>
            <div className={styles.header}>
                <div className={styles.headerSub}>
                    <Image
                        src="/contact.svg"
                        width={50}
                        height={50}
                        alt=''
                        className={styles.contact}
                    />
                    <span className={styles.headerText}>
                        {firstName}
                    </span>
                </div>
            </div>
            <div className={styles.userComponent}>
                <div className={styles.userComponentSubOne}>
                    {isEditing ? (
                        <div className={styles.EditingOn}>
                            <input
                                type="text"
                                className={styles.editFirstName}
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                            />
                            <input
                                type="text"
                                className={styles.editFirstName}
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                            />
                            <button onClick={handleSaveClick} className={styles.editBtn}>Save</button>
                        </div>
                    ) : (
                        <div className={styles.editingOff}>
                            <div className={styles.fName}>
                                <span className={styles.fNameText}>First Name:</span>
                                <span className={styles.prop}>
                                    {firstName}
                                </span>
                            </div>
                            <div className={styles.fName}>
                                <span className={styles.fNameText}>Last Name:</span>
                                <span className={styles.prop}>
                                    {lastName}
                                </span>
                            </div>

                            <button onClick={handleEditClick} className={styles.editBtn}>Edit</button>
                        </div>
                    )}
                </div>
                <div className={styles.userComponentSubTwo}>
                    <button onClick={handleGetLocationClick} className={styles.editBtn}>Get Location</button>
                    {latitude !== null && longitude !== null && (
                        <div className={styles.cont}>
                            <p>Lati: {latitude} , Longi: {longitude}</p>
                        </div>
                    )}
                </div>
                <div className={styles.userComponentSubThree}>
                    {isEdit ? (
                        <div className={styles.EditingOn}>
                            <input
                                type="number"
                                className={styles.editFirstName}
                                value={phoneNumber}
                                onChange={(e) => setPhoneNumber(e.target.value)}
                            />
                            <input
                                type="email"
                                className={styles.editFirstName}
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <button onClick={handleSavingClick} className={styles.editBtn}>Save</button>
                        </div>
                    ) : (
                        <div className={styles.editingOff}>
                            <div className={styles.fName}>
                                <span className={styles.fNameText}>Number</span>
                                <span className={styles.prop}>
                                    {phoneNumber}
                                </span>
                            </div>
                            <div className={styles.fName}>
                                <span className={styles.fNameText}>E-Mail</span>
                                <span className={styles.prop}>
                                    {email}
                                </span>
                            </div>
                            <button onClick={handleEditingClick} className={styles.editBtn}>Edit</button>
                        </div>
                    )}
                </div>
                <div className={styles.logOutBtn}>
                    <button className={styles.logBtn} className={styles.log}>Log Out</button>
                </div>
            </div>
            <div className={styles.footer}>
                <Footer />
            </div>
        </div>
    )
}

export default User