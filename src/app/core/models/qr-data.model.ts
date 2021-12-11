import { UuidService } from '../utils/uuid/uuid.service';

export class QrData {

    public settings: QrSettings;
    public publicidSender: string;
    public contactID: string;
    public idGroup: string;
    public uuid: string;

    constructor(private newUuid: UuidService) {
        this.uuid = this.newUuid.getUuid();
    }

}
export class QrSettings {
    nombre: string;
    tipo: string;
    fechaInicio: string;
    fechaExpiracion: string;
    uses: string;
}
