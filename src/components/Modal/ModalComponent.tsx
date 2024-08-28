import { useCallback, useState } from 'react';
import ColumnLayout from '../Layouts/ColumnLayout';
import './ModalComponent.scss';
import CloseComponent from '../CloseComponent/CloseComponent';

export interface iModalComponentExport {
    open: boolean;
    openModal: (override?: boolean) => void;
    closeModal: (override?: boolean) => void;
    Modal: ({
        children
    }: iModal) => null | JSX.Element;
}

export interface iModal {
    children: any;
}

const ModalComponent = (): iModalComponentExport => {
    const [open, setOpen] = useState(false);
    
    const openModal = useCallback((override?: boolean) => {
        setOpen(override ?? true);
    }, []);

    const closeModal = useCallback((override?: boolean) => {
        setOpen(override ?? false);
    }, []);

    const Modal = ({
        children
    }: iModal) => !open ? null : (
        <ColumnLayout 
            id="jdg-modal"
            onClick={() => closeModal()}
        >
            <ColumnLayout 
                id="jdg-modal-content" 
                className="Down"
                onClick={e => {
                    e.stopPropagation();
                    e.preventDefault();
                }}
            >
                <CloseComponent
                    action={() => closeModal()}
                />
                {children}
            </ColumnLayout>
        </ColumnLayout>
    );
    return {
        open,
        openModal,
        closeModal,
        Modal
    }
};
export default ModalComponent;