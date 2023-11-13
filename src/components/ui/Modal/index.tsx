"use client";
// modal standard boilerplate
/* eslint-disable */

import styles from "./index.module.css";
import React from "react";
import { useState, useCallback, useMemo } from "react";
const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = useCallback(() => setIsOpen(true), []);
  const closeModal = useCallback(() => setIsOpen(false), []);

  const ModalComponent = useMemo(
    () =>
      ({ children }: { children: React.ReactNode }) =>
        (
          <div className={styles.modalBackdrop} onClick={closeModal}>
            <div
              className={styles.modalContent}
              onClick={(e) => e.stopPropagation()}
            >
              <button className={styles.closeButton} onClick={closeModal}>
                <img src="/close.svg" alt="Close" />
              </button>
              {children}
            </div>
          </div>
        ),
    [closeModal]
  );

  return { isOpen, openModal, closeModal, ModalComponent };
};

export default useModal;
