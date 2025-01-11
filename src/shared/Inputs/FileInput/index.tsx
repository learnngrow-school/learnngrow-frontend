import React, { useRef, useState } from "react";
import { FieldError, Merge, FieldErrorsImpl } from "react-hook-form";
import "./fileInput.css";
import plusIcon from "../../../assets/icons/plus-gray.svg";

interface IProps {
  placeholder: string;
  id: string;
  register?: any;
  error?: FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined;
  containerClassName?: string;
  onFilesChange?: (files: File[]) => void;
  fileList: File[]; // Добавили пропс для получения списка файлов
}

const MAX_FILES = 10;

const FileInput: React.FC<IProps> = ({ placeholder, id, register, error, containerClassName, onFilesChange, fileList }) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const newFiles = Array.from(event.target.files);
      const totalFiles = fileList.length + newFiles.length;

      if (totalFiles > MAX_FILES) {
        alert(`Максимальное количество файлов: ${MAX_FILES}`);
        return;
      }

      const updatedFiles = [...fileList, ...newFiles];
      onFilesChange?.(updatedFiles);
    }
  };

  const handleFileClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <div className={`form-floating file-input-container ${containerClassName || ""}`}>
      <div
        className={`file-input-display ${error ? "file-input-error" : ""}`}
        onClick={handleFileClick}
      >
        <span className="file-input-placeholder">{placeholder}</span>
        <img src={plusIcon} alt="Add file" className="file-input-icon" />
      </div>
      <input
        type="file"
        id={id}
        className="file-input-hidden"
        {...register}
        ref={fileInputRef}
        multiple
        onChange={handleFileChange}
      />
      {error && <span className="file-input-error-message">{error.message as string}</span>}
    </div>
  );
};

export default FileInput;
