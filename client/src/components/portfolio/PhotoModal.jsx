/* Feature: Lightbox Modal for Images (Future Use) */
const PhotoModal = ({ image, onClose }) => {
  if (!image) return null;
  return (
    <div
      className="fixed inset-0 z-[100] bg-lux-black/95 flex items-center justify-center p-3 sm:p-4 md:p-6"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <img
        src={image}
        alt="Full view"
        className="max-h-[85vh] sm:max-h-[90vh] max-w-full object-contain"
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  );
};
export default PhotoModal;