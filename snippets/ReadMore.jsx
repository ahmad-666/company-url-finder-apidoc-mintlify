export const ReadMore = ({ link, children, className = "" }) => {
  return (
    <Button
      href={link}
      target="_blank"
      variant="outline"
      size="md"
      color="primary"
      className={`${className}`}
    >
      <Icon icon="code" size={24} className="!mint-bg-emerald-600 mr-2" />
      {children}
    </Button>
  );
};
