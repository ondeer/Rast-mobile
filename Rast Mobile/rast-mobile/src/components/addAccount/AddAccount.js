import React, { useState, useEffect } from "react";

import Modal from "../UI/Modal";

import { GrClose } from "react-icons/gr";

import {
  getLocalStorage,
  setLocalStorage,
} from "../../helperFunctions/LocalStorageFunction";

import classes from "./AddAccount.module.css";

const AddAccount = (props) => {
  /*State Tanımlamaları*/
  const [enteredLink, setEnteredLink] = useState("");
  const [enteredName, setEnteredName] = useState("");
  const [enteredDescription, setEnteredDescription] = useState("");
  const [errorMessage, setErrorMessage] = useState(false);
  const [successMessage, setSuccessMessage] = useState(false);

  /*Kullanıcı Ekleme Fonksiyonu*/
  const addUserHandler = (event) => {
    event.preventDefault();
    /*Input değerleri boş olup olmama durumu kontrol edildi*/
    if (
      enteredLink.trim().length === 0 ||
      enteredName.trim().length === 0 ||
      enteredDescription.trim().length === 0
    ) {
      setErrorMessage(true);
      return;
    }
    if (typeof window !== "undefined") {
      /*Input üzerinden gelen veriler objeye aktarıldı*/
      const accountData = {
        accountLink: enteredLink,
        accountName: enteredName,
        accountDescription: enteredDescription,
      };
      const stroageData = JSON.parse(getLocalStorage("account")) || [];
      stroageData.push(accountData);
      setLocalStorage("account", stroageData);
      setSuccessMessage(true);
      setErrorMessage(false);
    }
    /*Kullanıcı kaydete bastığında inputtaki değerler silindi */
    setEnteredLink("");
    setEnteredName("");
    setEnteredDescription("");
  };

  /* Input üzerinden gelen değerler state set edildi*/
  const socialLink = (event) => {
    setEnteredLink(event.target.value);
  };

  const socialName = (event) => {
    setEnteredName(event.target.value);
  };

  const socialDescription = (event) => {
    setEnteredDescription(event.target.value);
  };

  /*Inputa focuslandığında hata mesajı kaldırıldı*/
  const focusHandler = () => {
    setErrorMessage(false);
  };

  useEffect(() => {
    const timerSuccess = setTimeout(() => setSuccessMessage(false), 2500);
    return () => clearTimeout(timerSuccess);
  }, [successMessage]);

  return (
    <Modal onClose={props.onShowCart}>
      {successMessage && (
        <p className={classes["success-text"]}>Kaydetme işlemi tamamlandı</p>
      )}
      <GrClose className={classes.closeButton} onClick={props.onShowCart} />
      <form onSubmit={addUserHandler} className={classes.input}>
        <label htmlFor="accountLink">Sosyal Medya Linki</label>
        <input
          id="accountLink"
          value={enteredLink}
          type="text"
          onChange={socialLink}
          onFocus={focusHandler}
        ></input>
        <label htmlFor="accountLink">Sosyal Medya Adı</label>
        <input
          id="accountName"
          value={enteredName}
          type="text"
          onChange={socialName}
          onFocus={focusHandler}
        ></input>
        <label htmlFor="accountDescription">Açıklama</label>
        <input
          id="accountDescription"
          value={enteredDescription}
          type="text"
          onChange={socialDescription}
          onFocus={focusHandler}
        ></input>
        <div className={classes.buttonDiv}>
          <button className={classes.cancelButton} onClick={props.onShowCart}>
            Vazgeç
          </button>
          <button type="submit" className={classes.confirmButton}>
            Kaydet
          </button>
        </div>
        {errorMessage && (
          <p className={classes["error-text"]}>
            Lütfen Tüm Alanları Doldurunuz!
          </p>
        )}
      </form>
    </Modal>
  );
};

export default AddAccount;
