import { ChangeEvent } from "react";
import { useSettingsContext } from "../../contexts/useSettingsContext";
import { TbFileUpload } from "react-icons/tb";
import "./styles.scss";

export default function Settings() {
  const {
    setColorPrimary,
    setColorSecondary,
    setFundoAppBlur,
    setFundoAppOpacity,
    setloginBoxOpacity,
    fundoAppBlur,
    fundoAppOpacity,
    loginBoxOpacity,
    fileFundoAppImg,
    setFileFundoAppImg,
    fileFundoMenuImg,
    setFileFundoMenuImg,
    fileLogoAppImg,
    setFileLogoAppImg,
    fileLogoCabImg,
    setFileLogoCabImg,
  } = useSettingsContext();

  function changeRootVarAtribute(
    atributeValue: string,
    rootColorAtributeName: string
  ) {
    document.documentElement.style.setProperty(
      rootColorAtributeName,
      atributeValue
    );
  }

  function handleSelectFundoAppImg(
    e: ChangeEvent<HTMLInputElement>,
    identifier: "fundo_app" | "logo_app" | "fundo_menu" | "logo_cab"
  ) {
    if (!e.target.files) {
      return;
    }

    const selectedImages = Array.from(e.target.files);
    const selectedImagesPreview = selectedImages.map((image) => {
      return URL.createObjectURL(image);
    });

    switch (identifier) {
      case "fundo_app":
        setFileFundoAppImg(selectedImagesPreview);
        break;
      case "fundo_menu":
        setFileFundoMenuImg(selectedImagesPreview);
        break;
      case "logo_app":
        setFileLogoAppImg(selectedImagesPreview);
        break;
      case "logo_cab":
        setFileLogoCabImg(selectedImagesPreview);
        break;
      default:
        break;
    }
  }

  return (
    <div className="settings-container">
      <h3>Configurações:</h3>

      <div>
        <div className="input-container">
          <label className="header-settings-item">
            <span>
              Fundo App: <span style={{ color: "#3665bd" }}>500x889</span>
            </span>
          </label>
          <label>
            {/* <input type="file" /> */}
            <input
              onChange={(e) => handleSelectFundoAppImg(e, "fundo_app")}
              type="file"
              id="image[]"
            />
            <span className="btn-subir-imagem">
              <p>Subir imagem</p>
              <div>
                <TbFileUpload color="#ffffff" size={24} />
              </div>
            </span>
          </label>

          {fileFundoAppImg.map((image) => {
            return (
              <img
                key={image}
                src={image}
                className="preview-image-container"
              />
            );
          })}
        </div>
        <div className="input-container">
          <label className="header-settings-item">
            <span>
              Logo App: <span style={{ color: "#3665bd" }}>450x250</span>
            </span>
          </label>
          <label>
            <input
              onChange={(e) => handleSelectFundoAppImg(e, "logo_app")}
              type="file"
              id="image[]"
            />
            <span className="btn-subir-imagem">
              <p>Subir imagem</p>
              <div>
                <TbFileUpload color="#ffffff" size={24} />
              </div>
            </span>
          </label>
          {fileLogoAppImg.map((image) => {
            return (
              <img
                key={image}
                src={image}
                className="preview-image-container"
              />
            );
          })}
        </div>
        <div className="input-container">
          <label className="header-settings-item">
            <span>
              Fundo Menu: <span style={{ color: "#3665bd" }}>400x200</span>
            </span>
          </label>
          <label>
            <input
              onChange={(e) => handleSelectFundoAppImg(e, "fundo_menu")}
              type="file"
              id="image[]"
            />
            <span className="btn-subir-imagem">
              <p>Subir imagem</p>
              <div>
                <TbFileUpload color="#ffffff" size={24} />
              </div>
            </span>
          </label>
          {fileFundoMenuImg.map((image) => {
            return (
              <img
                key={image}
                src={image}
                className="preview-image-container"
              />
            );
          })}
        </div>
        <div className="input-container">
          <label className="header-settings-item">
            <span className="header-settings-item">
              Logo Cab: <span style={{ color: "#3665bd" }}>130x130</span>
            </span>
          </label>
          <label>
            <input
              onChange={(e) => handleSelectFundoAppImg(e, "logo_cab")}
              type="file"
              id="image[]"
            />
            <span className="btn-subir-imagem">
              <p>Subir imagem</p>
              <div>
                <TbFileUpload color="#ffffff" size={24} />
              </div>
            </span>
          </label>
          {fileLogoCabImg.map((image) => {
            return (
              <img
                key={image}
                src={image}
                className="preview-image-container"
              />
            );
          })}
        </div>
        <div className="input-container">
          <label className="header-settings-item">
            <span>Cor 1:</span>
          </label>
          <input
            type="color"
            onChange={(evt) => {
              const { value } = evt.target;
              changeRootVarAtribute(value, "--color-primary");
              setColorPrimary(value);
            }}
            defaultValue="#0077bd"
          />
        </div>
        <div className="input-container">
          <label className="header-settings-item">
            <span>Cor 2:</span>
          </label>
          <input
            type="color"
            onChange={(evt) => {
              const { value } = evt.target;
              changeRootVarAtribute(value, "--color-secondary");
              setColorSecondary(value);
            }}
            defaultValue="#ed3237"
          />
        </div>
        <div className="input-container">
          <label className="header-settings-item">
            <span>
              Fundo App OPACITY:{" "}
              <span className="span-detail">{fundoAppOpacity}%</span>
            </span>
          </label>
          <input
            type="range"
            onChange={(evt) => {
              const { value } = evt.target;
              changeRootVarAtribute(`${value}%`, "--fundo-app-opacity");
              setFundoAppOpacity(parseInt(value));
            }}
            defaultValue="70"
            min="0"
            max="100"
            step="1"
          />
        </div>
        <div className="input-container">
          <label className="header-settings-item">
            <span>
              Fundo App BLUR:{" "}
              <span className="span-detail">{fundoAppBlur}px</span>
            </span>
          </label>
          <input
            type="range"
            onChange={(evt) => {
              const { value } = evt.target;
              changeRootVarAtribute(`${value}px`, "--fundo-app-blur");
              setFundoAppBlur(parseInt(value));
            }}
            step="1"
            min="0"
            max="10"
            defaultValue="3" // mesmo que o --fundo-app-blur
          />
        </div>
        <div className="input-container">
          <label className="header-settings-item">
            <span>
              Login box OPACITY:{" "}
              <span className="span-detail">{loginBoxOpacity}%</span>
            </span>
          </label>
          <input
            type="range"
            onChange={(evt) => {
              const { value } = evt.target;
              changeRootVarAtribute(`${value}%`, "--box-login-opacity");
              setloginBoxOpacity(parseInt(value));
            }}
            defaultValue="100"
            min="0"
            max="100"
            step="1"
          />
        </div>
      </div>
    </div>
  );
}
