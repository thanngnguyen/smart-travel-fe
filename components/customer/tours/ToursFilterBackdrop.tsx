interface ToursFilterBackdropProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ToursFilterBackdrop({
  isOpen,
  onClose,
}: ToursFilterBackdropProps) {
  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 bg-on-surface/20 backdrop-blur-sm z-30 lg:hidden opacity-100 transition-opacity"
      onClick={onClose}
    />
  );
}
