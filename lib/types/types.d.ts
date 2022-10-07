interface IEButton {
  selected?: Boolean;
  background?: Boolean;
}

interface IERoundButton extends IEButton {
  width: number;
  height: number;
  background?: Boolean;
}

interface IECheckbox {
  label?: string;
  disabled?: Boolean;
}

interface IERadio {
  label?: string;
  disabled?: Boolean;
}

interface IEInput {
  label?: string;
  required?: Boolean;
}

interface IETextArea {
  label?: string;
  required?: Boolean;
}

interface IELabel {
  required?: Boolean;
  disabled?: Boolean;
}

interface IECardImage {
  src: string;
  alt: string;
}

interface IECard {
  children?: React.ReactNode;
}

interface IECardImage {
  children?: React.ReactNode;
  className?: string;
}

interface IECardFooter {
  children?: React.ReactNode;
  className?: string;
}

interface IEListView {
  columns: number;
}

interface IESVGIcon {
  width?: string | number;
  height?: string | number;
}

