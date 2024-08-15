import react, { useCallback, useState } from 'react';
import ColumnLayout from '../Layouts/ColumnLayout';
import Headline from '../Text/Headline';
import './ModalComponent.scss';

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
        <ColumnLayout id="jdg-modal">
            <ColumnLayout id="jdg-modal-content" className="Down">
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