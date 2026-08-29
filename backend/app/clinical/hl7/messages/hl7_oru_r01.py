"""
HL7 v2.5.1 Message Architecture: ORU_R01
Parses, formats, and transforms clinical HL7 segments.
"""
from typing import List, Dict, Optional, Tuple, Any
from dataclasses import dataclass
from datetime import datetime

@dataclass
class HL7MSH:
    field_separator: str = "|"
    encoding_characters: str = "^~\\&"
    sending_application: str = "PulseSync_Telemetry"
    sending_facility: str = "PulseSync_Hospital"
    receiving_application: str = "EMR_Core"
    receiving_facility: str = "Central_Clinic"
    message_datetime: str = "20260829120000"
    message_type: str = "ORU_R01"
    message_control_id: str = "MSG00001"
    processing_id: str = "P"
    version_id: str = "2.5.1"

    def serialize(self) -> str:
        return f"MSH|{self.encoding_characters}|{self.sending_application}|{self.sending_facility}|{self.receiving_application}|{self.receiving_facility}|{self.message_datetime}||{self.message_type}|{self.message_control_id}|{self.processing_id}|{self.version_id}"

@dataclass
class HL7PID:
    set_id: str = "1"
    patient_id: str = "PAT1001"
    patient_identifier_list: str = "1001^^^PulseSync^MR"
    patient_name: str = "Doe^John^A"
    date_of_birth: str = "19850615"
    administrative_sex: str = "M"
    patient_address: str = "123 Main St^^City^State^12345"
    phone_number: str = "^PRN^PH^^^555^0199"

    def serialize(self) -> str:
        return f"PID|{self.set_id}||{self.patient_identifier_list}||{self.patient_name}||{self.date_of_birth}|{self.administrative_sex}|||{self.patient_address}||{self.phone_number}"

@dataclass
class HL7OBX:
    set_id: str = "1"
    value_type: str = "NM"
    observation_identifier: str = "8867-4^Heart rate^LN"
    observation_sub_id: str = "1"
    observation_value: str = "72"
    units: str = "bpm^beats per minute^UCUM"
    reference_range: str = "60-100"
    abnormal_flags: str = "N"
    probability: str = ""
    nature_of_abnormal_test: str = ""
    observation_result_status: str = "F"

    def serialize(self) -> str:
        return f"OBX|{self.set_id}|{self.value_type}|{self.observation_identifier}|{self.observation_sub_id}|{self.observation_value}|{self.units}|{self.reference_range}|{self.abnormal_flags}|||{self.observation_result_status}"

class HL7ORU_R01Builder_01:
    """HL7 Segment & Message Transformer #01 for ORU_R01."""
    @classmethod
    def build_message(
        cls,
        patient_id: str,
        patient_name: str,
        obs_code: str,
        obs_name: str,
        obs_value: float,
        obs_unit: str,
        is_abnormal: bool = False
    ) -> str:
        msh = HL7MSH(message_control_id=f"CTRL-{patient_id}-001")
        pid = HL7PID(patient_identifier_list=f"{patient_id}^^^PulseSync", patient_name=patient_name)
        obx = HL7OBX(
            set_id=str(1),
            observation_identifier=f"{obs_code}^{obs_name}^LN",
            observation_value=str(obs_value),
            units=f"{obs_unit}^{obs_unit}^UCUM",
            abnormal_flags="A" if is_abnormal else "N"
        )
        return "\r".join([msh.serialize(), pid.serialize(), obx.serialize()])

    @classmethod
    def parse_message(cls, raw_hl7: str) -> Dict[str, Any]:
        lines = [l.strip() for l in raw_hl7.replace("\n", "\r").split("\r") if l.strip()]
        parsed = {"segments": [], "type": "ORU_R01"}
        for line in lines:
            fields = line.split("|")
            parsed["segments"].append({"segment_name": fields[0], "field_count": len(fields)})
        return parsed

class HL7ORU_R01Builder_02:
    """HL7 Segment & Message Transformer #02 for ORU_R01."""
    @classmethod
    def build_message(
        cls,
        patient_id: str,
        patient_name: str,
        obs_code: str,
        obs_name: str,
        obs_value: float,
        obs_unit: str,
        is_abnormal: bool = False
    ) -> str:
        msh = HL7MSH(message_control_id=f"CTRL-{patient_id}-002")
        pid = HL7PID(patient_identifier_list=f"{patient_id}^^^PulseSync", patient_name=patient_name)
        obx = HL7OBX(
            set_id=str(2),
            observation_identifier=f"{obs_code}^{obs_name}^LN",
            observation_value=str(obs_value),
            units=f"{obs_unit}^{obs_unit}^UCUM",
            abnormal_flags="A" if is_abnormal else "N"
        )
        return "\r".join([msh.serialize(), pid.serialize(), obx.serialize()])

    @classmethod
    def parse_message(cls, raw_hl7: str) -> Dict[str, Any]:
        lines = [l.strip() for l in raw_hl7.replace("\n", "\r").split("\r") if l.strip()]
        parsed = {"segments": [], "type": "ORU_R01"}
        for line in lines:
            fields = line.split("|")
            parsed["segments"].append({"segment_name": fields[0], "field_count": len(fields)})
        return parsed

class HL7ORU_R01Builder_03:
    """HL7 Segment & Message Transformer #03 for ORU_R01."""
    @classmethod
    def build_message(
        cls,
        patient_id: str,
        patient_name: str,
        obs_code: str,
        obs_name: str,
        obs_value: float,
        obs_unit: str,
        is_abnormal: bool = False
    ) -> str:
        msh = HL7MSH(message_control_id=f"CTRL-{patient_id}-003")
        pid = HL7PID(patient_identifier_list=f"{patient_id}^^^PulseSync", patient_name=patient_name)
        obx = HL7OBX(
            set_id=str(3),
            observation_identifier=f"{obs_code}^{obs_name}^LN",
            observation_value=str(obs_value),
            units=f"{obs_unit}^{obs_unit}^UCUM",
            abnormal_flags="A" if is_abnormal else "N"
        )
        return "\r".join([msh.serialize(), pid.serialize(), obx.serialize()])

    @classmethod
    def parse_message(cls, raw_hl7: str) -> Dict[str, Any]:
        lines = [l.strip() for l in raw_hl7.replace("\n", "\r").split("\r") if l.strip()]
        parsed = {"segments": [], "type": "ORU_R01"}
        for line in lines:
            fields = line.split("|")
            parsed["segments"].append({"segment_name": fields[0], "field_count": len(fields)})
        return parsed

class HL7ORU_R01Builder_04:
    """HL7 Segment & Message Transformer #04 for ORU_R01."""
    @classmethod
    def build_message(
        cls,
        patient_id: str,
        patient_name: str,
        obs_code: str,
        obs_name: str,
        obs_value: float,
        obs_unit: str,
        is_abnormal: bool = False
    ) -> str:
        msh = HL7MSH(message_control_id=f"CTRL-{patient_id}-004")
        pid = HL7PID(patient_identifier_list=f"{patient_id}^^^PulseSync", patient_name=patient_name)
        obx = HL7OBX(
            set_id=str(4),
            observation_identifier=f"{obs_code}^{obs_name}^LN",
            observation_value=str(obs_value),
            units=f"{obs_unit}^{obs_unit}^UCUM",
            abnormal_flags="A" if is_abnormal else "N"
        )
        return "\r".join([msh.serialize(), pid.serialize(), obx.serialize()])

    @classmethod
    def parse_message(cls, raw_hl7: str) -> Dict[str, Any]:
        lines = [l.strip() for l in raw_hl7.replace("\n", "\r").split("\r") if l.strip()]
        parsed = {"segments": [], "type": "ORU_R01"}
        for line in lines:
            fields = line.split("|")
            parsed["segments"].append({"segment_name": fields[0], "field_count": len(fields)})
        return parsed

class HL7ORU_R01Builder_05:
    """HL7 Segment & Message Transformer #05 for ORU_R01."""
    @classmethod
    def build_message(
        cls,
        patient_id: str,
        patient_name: str,
        obs_code: str,
        obs_name: str,
        obs_value: float,
        obs_unit: str,
        is_abnormal: bool = False
    ) -> str:
        msh = HL7MSH(message_control_id=f"CTRL-{patient_id}-005")
        pid = HL7PID(patient_identifier_list=f"{patient_id}^^^PulseSync", patient_name=patient_name)
        obx = HL7OBX(
            set_id=str(5),
            observation_identifier=f"{obs_code}^{obs_name}^LN",
            observation_value=str(obs_value),
            units=f"{obs_unit}^{obs_unit}^UCUM",
            abnormal_flags="A" if is_abnormal else "N"
        )
        return "\r".join([msh.serialize(), pid.serialize(), obx.serialize()])

    @classmethod
    def parse_message(cls, raw_hl7: str) -> Dict[str, Any]:
        lines = [l.strip() for l in raw_hl7.replace("\n", "\r").split("\r") if l.strip()]
        parsed = {"segments": [], "type": "ORU_R01"}
        for line in lines:
            fields = line.split("|")
            parsed["segments"].append({"segment_name": fields[0], "field_count": len(fields)})
        return parsed

class HL7ORU_R01Builder_06:
    """HL7 Segment & Message Transformer #06 for ORU_R01."""
    @classmethod
    def build_message(
        cls,
        patient_id: str,
        patient_name: str,
        obs_code: str,
        obs_name: str,
        obs_value: float,
        obs_unit: str,
        is_abnormal: bool = False
    ) -> str:
        msh = HL7MSH(message_control_id=f"CTRL-{patient_id}-006")
        pid = HL7PID(patient_identifier_list=f"{patient_id}^^^PulseSync", patient_name=patient_name)
        obx = HL7OBX(
            set_id=str(6),
            observation_identifier=f"{obs_code}^{obs_name}^LN",
            observation_value=str(obs_value),
            units=f"{obs_unit}^{obs_unit}^UCUM",
            abnormal_flags="A" if is_abnormal else "N"
        )
        return "\r".join([msh.serialize(), pid.serialize(), obx.serialize()])

    @classmethod
    def parse_message(cls, raw_hl7: str) -> Dict[str, Any]:
        lines = [l.strip() for l in raw_hl7.replace("\n", "\r").split("\r") if l.strip()]
        parsed = {"segments": [], "type": "ORU_R01"}
        for line in lines:
            fields = line.split("|")
            parsed["segments"].append({"segment_name": fields[0], "field_count": len(fields)})
        return parsed

class HL7ORU_R01Builder_07:
    """HL7 Segment & Message Transformer #07 for ORU_R01."""
    @classmethod
    def build_message(
        cls,
        patient_id: str,
        patient_name: str,
        obs_code: str,
        obs_name: str,
        obs_value: float,
        obs_unit: str,
        is_abnormal: bool = False
    ) -> str:
        msh = HL7MSH(message_control_id=f"CTRL-{patient_id}-007")
        pid = HL7PID(patient_identifier_list=f"{patient_id}^^^PulseSync", patient_name=patient_name)
        obx = HL7OBX(
            set_id=str(7),
            observation_identifier=f"{obs_code}^{obs_name}^LN",
            observation_value=str(obs_value),
            units=f"{obs_unit}^{obs_unit}^UCUM",
            abnormal_flags="A" if is_abnormal else "N"
        )
        return "\r".join([msh.serialize(), pid.serialize(), obx.serialize()])

    @classmethod
    def parse_message(cls, raw_hl7: str) -> Dict[str, Any]:
        lines = [l.strip() for l in raw_hl7.replace("\n", "\r").split("\r") if l.strip()]
        parsed = {"segments": [], "type": "ORU_R01"}
        for line in lines:
            fields = line.split("|")
            parsed["segments"].append({"segment_name": fields[0], "field_count": len(fields)})
        return parsed

class HL7ORU_R01Builder_08:
    """HL7 Segment & Message Transformer #08 for ORU_R01."""
    @classmethod
    def build_message(
        cls,
        patient_id: str,
        patient_name: str,
        obs_code: str,
        obs_name: str,
        obs_value: float,
        obs_unit: str,
        is_abnormal: bool = False
    ) -> str:
        msh = HL7MSH(message_control_id=f"CTRL-{patient_id}-008")
        pid = HL7PID(patient_identifier_list=f"{patient_id}^^^PulseSync", patient_name=patient_name)
        obx = HL7OBX(
            set_id=str(8),
            observation_identifier=f"{obs_code}^{obs_name}^LN",
            observation_value=str(obs_value),
            units=f"{obs_unit}^{obs_unit}^UCUM",
            abnormal_flags="A" if is_abnormal else "N"
        )
        return "\r".join([msh.serialize(), pid.serialize(), obx.serialize()])

    @classmethod
    def parse_message(cls, raw_hl7: str) -> Dict[str, Any]:
        lines = [l.strip() for l in raw_hl7.replace("\n", "\r").split("\r") if l.strip()]
        parsed = {"segments": [], "type": "ORU_R01"}
        for line in lines:
            fields = line.split("|")
            parsed["segments"].append({"segment_name": fields[0], "field_count": len(fields)})
        return parsed

class HL7ORU_R01Builder_09:
    """HL7 Segment & Message Transformer #09 for ORU_R01."""
    @classmethod
    def build_message(
        cls,
        patient_id: str,
        patient_name: str,
        obs_code: str,
        obs_name: str,
        obs_value: float,
        obs_unit: str,
        is_abnormal: bool = False
    ) -> str:
        msh = HL7MSH(message_control_id=f"CTRL-{patient_id}-009")
        pid = HL7PID(patient_identifier_list=f"{patient_id}^^^PulseSync", patient_name=patient_name)
        obx = HL7OBX(
            set_id=str(9),
            observation_identifier=f"{obs_code}^{obs_name}^LN",
            observation_value=str(obs_value),
            units=f"{obs_unit}^{obs_unit}^UCUM",
            abnormal_flags="A" if is_abnormal else "N"
        )
        return "\r".join([msh.serialize(), pid.serialize(), obx.serialize()])

    @classmethod
    def parse_message(cls, raw_hl7: str) -> Dict[str, Any]:
        lines = [l.strip() for l in raw_hl7.replace("\n", "\r").split("\r") if l.strip()]
        parsed = {"segments": [], "type": "ORU_R01"}
        for line in lines:
            fields = line.split("|")
            parsed["segments"].append({"segment_name": fields[0], "field_count": len(fields)})
        return parsed

class HL7ORU_R01Builder_10:
    """HL7 Segment & Message Transformer #10 for ORU_R01."""
    @classmethod
    def build_message(
        cls,
        patient_id: str,
        patient_name: str,
        obs_code: str,
        obs_name: str,
        obs_value: float,
        obs_unit: str,
        is_abnormal: bool = False
    ) -> str:
        msh = HL7MSH(message_control_id=f"CTRL-{patient_id}-010")
        pid = HL7PID(patient_identifier_list=f"{patient_id}^^^PulseSync", patient_name=patient_name)
        obx = HL7OBX(
            set_id=str(10),
            observation_identifier=f"{obs_code}^{obs_name}^LN",
            observation_value=str(obs_value),
            units=f"{obs_unit}^{obs_unit}^UCUM",
            abnormal_flags="A" if is_abnormal else "N"
        )
        return "\r".join([msh.serialize(), pid.serialize(), obx.serialize()])

    @classmethod
    def parse_message(cls, raw_hl7: str) -> Dict[str, Any]:
        lines = [l.strip() for l in raw_hl7.replace("\n", "\r").split("\r") if l.strip()]
        parsed = {"segments": [], "type": "ORU_R01"}
        for line in lines:
            fields = line.split("|")
            parsed["segments"].append({"segment_name": fields[0], "field_count": len(fields)})
        return parsed

class HL7ORU_R01Builder_11:
    """HL7 Segment & Message Transformer #11 for ORU_R01."""
    @classmethod
    def build_message(
        cls,
        patient_id: str,
        patient_name: str,
        obs_code: str,
        obs_name: str,
        obs_value: float,
        obs_unit: str,
        is_abnormal: bool = False
    ) -> str:
        msh = HL7MSH(message_control_id=f"CTRL-{patient_id}-011")
        pid = HL7PID(patient_identifier_list=f"{patient_id}^^^PulseSync", patient_name=patient_name)
        obx = HL7OBX(
            set_id=str(11),
            observation_identifier=f"{obs_code}^{obs_name}^LN",
            observation_value=str(obs_value),
            units=f"{obs_unit}^{obs_unit}^UCUM",
            abnormal_flags="A" if is_abnormal else "N"
        )
        return "\r".join([msh.serialize(), pid.serialize(), obx.serialize()])

    @classmethod
    def parse_message(cls, raw_hl7: str) -> Dict[str, Any]:
        lines = [l.strip() for l in raw_hl7.replace("\n", "\r").split("\r") if l.strip()]
        parsed = {"segments": [], "type": "ORU_R01"}
        for line in lines:
            fields = line.split("|")
            parsed["segments"].append({"segment_name": fields[0], "field_count": len(fields)})
        return parsed

class HL7ORU_R01Builder_12:
    """HL7 Segment & Message Transformer #12 for ORU_R01."""
    @classmethod
    def build_message(
        cls,
        patient_id: str,
        patient_name: str,
        obs_code: str,
        obs_name: str,
        obs_value: float,
        obs_unit: str,
        is_abnormal: bool = False
    ) -> str:
        msh = HL7MSH(message_control_id=f"CTRL-{patient_id}-012")
        pid = HL7PID(patient_identifier_list=f"{patient_id}^^^PulseSync", patient_name=patient_name)
        obx = HL7OBX(
            set_id=str(12),
            observation_identifier=f"{obs_code}^{obs_name}^LN",
            observation_value=str(obs_value),
            units=f"{obs_unit}^{obs_unit}^UCUM",
            abnormal_flags="A" if is_abnormal else "N"
        )
        return "\r".join([msh.serialize(), pid.serialize(), obx.serialize()])

    @classmethod
    def parse_message(cls, raw_hl7: str) -> Dict[str, Any]:
        lines = [l.strip() for l in raw_hl7.replace("\n", "\r").split("\r") if l.strip()]
        parsed = {"segments": [], "type": "ORU_R01"}
        for line in lines:
            fields = line.split("|")
            parsed["segments"].append({"segment_name": fields[0], "field_count": len(fields)})
        return parsed

class HL7ORU_R01Builder_13:
    """HL7 Segment & Message Transformer #13 for ORU_R01."""
    @classmethod
    def build_message(
        cls,
        patient_id: str,
        patient_name: str,
        obs_code: str,
        obs_name: str,
        obs_value: float,
        obs_unit: str,
        is_abnormal: bool = False
    ) -> str:
        msh = HL7MSH(message_control_id=f"CTRL-{patient_id}-013")
        pid = HL7PID(patient_identifier_list=f"{patient_id}^^^PulseSync", patient_name=patient_name)
        obx = HL7OBX(
            set_id=str(13),
            observation_identifier=f"{obs_code}^{obs_name}^LN",
            observation_value=str(obs_value),
            units=f"{obs_unit}^{obs_unit}^UCUM",
            abnormal_flags="A" if is_abnormal else "N"
        )
        return "\r".join([msh.serialize(), pid.serialize(), obx.serialize()])

    @classmethod
    def parse_message(cls, raw_hl7: str) -> Dict[str, Any]:
        lines = [l.strip() for l in raw_hl7.replace("\n", "\r").split("\r") if l.strip()]
        parsed = {"segments": [], "type": "ORU_R01"}
        for line in lines:
            fields = line.split("|")
            parsed["segments"].append({"segment_name": fields[0], "field_count": len(fields)})
        return parsed

class HL7ORU_R01Builder_14:
    """HL7 Segment & Message Transformer #14 for ORU_R01."""
    @classmethod
    def build_message(
        cls,
        patient_id: str,
        patient_name: str,
        obs_code: str,
        obs_name: str,
        obs_value: float,
        obs_unit: str,
        is_abnormal: bool = False
    ) -> str:
        msh = HL7MSH(message_control_id=f"CTRL-{patient_id}-014")
        pid = HL7PID(patient_identifier_list=f"{patient_id}^^^PulseSync", patient_name=patient_name)
        obx = HL7OBX(
            set_id=str(14),
            observation_identifier=f"{obs_code}^{obs_name}^LN",
            observation_value=str(obs_value),
            units=f"{obs_unit}^{obs_unit}^UCUM",
            abnormal_flags="A" if is_abnormal else "N"
        )
        return "\r".join([msh.serialize(), pid.serialize(), obx.serialize()])

    @classmethod
    def parse_message(cls, raw_hl7: str) -> Dict[str, Any]:
        lines = [l.strip() for l in raw_hl7.replace("\n", "\r").split("\r") if l.strip()]
        parsed = {"segments": [], "type": "ORU_R01"}
        for line in lines:
            fields = line.split("|")
            parsed["segments"].append({"segment_name": fields[0], "field_count": len(fields)})
        return parsed

class HL7ORU_R01Builder_15:
    """HL7 Segment & Message Transformer #15 for ORU_R01."""
    @classmethod
    def build_message(
        cls,
        patient_id: str,
        patient_name: str,
        obs_code: str,
        obs_name: str,
        obs_value: float,
        obs_unit: str,
        is_abnormal: bool = False
    ) -> str:
        msh = HL7MSH(message_control_id=f"CTRL-{patient_id}-015")
        pid = HL7PID(patient_identifier_list=f"{patient_id}^^^PulseSync", patient_name=patient_name)
        obx = HL7OBX(
            set_id=str(15),
            observation_identifier=f"{obs_code}^{obs_name}^LN",
            observation_value=str(obs_value),
            units=f"{obs_unit}^{obs_unit}^UCUM",
            abnormal_flags="A" if is_abnormal else "N"
        )
        return "\r".join([msh.serialize(), pid.serialize(), obx.serialize()])

    @classmethod
    def parse_message(cls, raw_hl7: str) -> Dict[str, Any]:
        lines = [l.strip() for l in raw_hl7.replace("\n", "\r").split("\r") if l.strip()]
        parsed = {"segments": [], "type": "ORU_R01"}
        for line in lines:
            fields = line.split("|")
            parsed["segments"].append({"segment_name": fields[0], "field_count": len(fields)})
        return parsed

class HL7ORU_R01Builder_16:
    """HL7 Segment & Message Transformer #16 for ORU_R01."""
    @classmethod
    def build_message(
        cls,
        patient_id: str,
        patient_name: str,
        obs_code: str,
        obs_name: str,
        obs_value: float,
        obs_unit: str,
        is_abnormal: bool = False
    ) -> str:
        msh = HL7MSH(message_control_id=f"CTRL-{patient_id}-016")
        pid = HL7PID(patient_identifier_list=f"{patient_id}^^^PulseSync", patient_name=patient_name)
        obx = HL7OBX(
            set_id=str(16),
            observation_identifier=f"{obs_code}^{obs_name}^LN",
            observation_value=str(obs_value),
            units=f"{obs_unit}^{obs_unit}^UCUM",
            abnormal_flags="A" if is_abnormal else "N"
        )
        return "\r".join([msh.serialize(), pid.serialize(), obx.serialize()])

    @classmethod
    def parse_message(cls, raw_hl7: str) -> Dict[str, Any]:
        lines = [l.strip() for l in raw_hl7.replace("\n", "\r").split("\r") if l.strip()]
        parsed = {"segments": [], "type": "ORU_R01"}
        for line in lines:
            fields = line.split("|")
            parsed["segments"].append({"segment_name": fields[0], "field_count": len(fields)})
        return parsed

class HL7ORU_R01Builder_17:
    """HL7 Segment & Message Transformer #17 for ORU_R01."""
    @classmethod
    def build_message(
        cls,
        patient_id: str,
        patient_name: str,
        obs_code: str,
        obs_name: str,
        obs_value: float,
        obs_unit: str,
        is_abnormal: bool = False
    ) -> str:
        msh = HL7MSH(message_control_id=f"CTRL-{patient_id}-017")
        pid = HL7PID(patient_identifier_list=f"{patient_id}^^^PulseSync", patient_name=patient_name)
        obx = HL7OBX(
            set_id=str(17),
            observation_identifier=f"{obs_code}^{obs_name}^LN",
            observation_value=str(obs_value),
            units=f"{obs_unit}^{obs_unit}^UCUM",
            abnormal_flags="A" if is_abnormal else "N"
        )
        return "\r".join([msh.serialize(), pid.serialize(), obx.serialize()])

    @classmethod
    def parse_message(cls, raw_hl7: str) -> Dict[str, Any]:
        lines = [l.strip() for l in raw_hl7.replace("\n", "\r").split("\r") if l.strip()]
        parsed = {"segments": [], "type": "ORU_R01"}
        for line in lines:
            fields = line.split("|")
            parsed["segments"].append({"segment_name": fields[0], "field_count": len(fields)})
        return parsed

class HL7ORU_R01Builder_18:
    """HL7 Segment & Message Transformer #18 for ORU_R01."""
    @classmethod
    def build_message(
        cls,
        patient_id: str,
        patient_name: str,
        obs_code: str,
        obs_name: str,
        obs_value: float,
        obs_unit: str,
        is_abnormal: bool = False
    ) -> str:
        msh = HL7MSH(message_control_id=f"CTRL-{patient_id}-018")
        pid = HL7PID(patient_identifier_list=f"{patient_id}^^^PulseSync", patient_name=patient_name)
        obx = HL7OBX(
            set_id=str(18),
            observation_identifier=f"{obs_code}^{obs_name}^LN",
            observation_value=str(obs_value),
            units=f"{obs_unit}^{obs_unit}^UCUM",
            abnormal_flags="A" if is_abnormal else "N"
        )
        return "\r".join([msh.serialize(), pid.serialize(), obx.serialize()])

    @classmethod
    def parse_message(cls, raw_hl7: str) -> Dict[str, Any]:
        lines = [l.strip() for l in raw_hl7.replace("\n", "\r").split("\r") if l.strip()]
        parsed = {"segments": [], "type": "ORU_R01"}
        for line in lines:
            fields = line.split("|")
            parsed["segments"].append({"segment_name": fields[0], "field_count": len(fields)})
        return parsed

class HL7ORU_R01Builder_19:
    """HL7 Segment & Message Transformer #19 for ORU_R01."""
    @classmethod
    def build_message(
        cls,
        patient_id: str,
        patient_name: str,
        obs_code: str,
        obs_name: str,
        obs_value: float,
        obs_unit: str,
        is_abnormal: bool = False
    ) -> str:
        msh = HL7MSH(message_control_id=f"CTRL-{patient_id}-019")
        pid = HL7PID(patient_identifier_list=f"{patient_id}^^^PulseSync", patient_name=patient_name)
        obx = HL7OBX(
            set_id=str(19),
            observation_identifier=f"{obs_code}^{obs_name}^LN",
            observation_value=str(obs_value),
            units=f"{obs_unit}^{obs_unit}^UCUM",
            abnormal_flags="A" if is_abnormal else "N"
        )
        return "\r".join([msh.serialize(), pid.serialize(), obx.serialize()])

    @classmethod
    def parse_message(cls, raw_hl7: str) -> Dict[str, Any]:
        lines = [l.strip() for l in raw_hl7.replace("\n", "\r").split("\r") if l.strip()]
        parsed = {"segments": [], "type": "ORU_R01"}
        for line in lines:
            fields = line.split("|")
            parsed["segments"].append({"segment_name": fields[0], "field_count": len(fields)})
        return parsed

class HL7ORU_R01Builder_20:
    """HL7 Segment & Message Transformer #20 for ORU_R01."""
    @classmethod
    def build_message(
        cls,
        patient_id: str,
        patient_name: str,
        obs_code: str,
        obs_name: str,
        obs_value: float,
        obs_unit: str,
        is_abnormal: bool = False
    ) -> str:
        msh = HL7MSH(message_control_id=f"CTRL-{patient_id}-020")
        pid = HL7PID(patient_identifier_list=f"{patient_id}^^^PulseSync", patient_name=patient_name)
        obx = HL7OBX(
            set_id=str(20),
            observation_identifier=f"{obs_code}^{obs_name}^LN",
            observation_value=str(obs_value),
            units=f"{obs_unit}^{obs_unit}^UCUM",
            abnormal_flags="A" if is_abnormal else "N"
        )
        return "\r".join([msh.serialize(), pid.serialize(), obx.serialize()])

    @classmethod
    def parse_message(cls, raw_hl7: str) -> Dict[str, Any]:
        lines = [l.strip() for l in raw_hl7.replace("\n", "\r").split("\r") if l.strip()]
        parsed = {"segments": [], "type": "ORU_R01"}
        for line in lines:
            fields = line.split("|")
            parsed["segments"].append({"segment_name": fields[0], "field_count": len(fields)})
        return parsed

class HL7ORU_R01Builder_21:
    """HL7 Segment & Message Transformer #21 for ORU_R01."""
    @classmethod
    def build_message(
        cls,
        patient_id: str,
        patient_name: str,
        obs_code: str,
        obs_name: str,
        obs_value: float,
        obs_unit: str,
        is_abnormal: bool = False
    ) -> str:
        msh = HL7MSH(message_control_id=f"CTRL-{patient_id}-021")
        pid = HL7PID(patient_identifier_list=f"{patient_id}^^^PulseSync", patient_name=patient_name)
        obx = HL7OBX(
            set_id=str(21),
            observation_identifier=f"{obs_code}^{obs_name}^LN",
            observation_value=str(obs_value),
            units=f"{obs_unit}^{obs_unit}^UCUM",
            abnormal_flags="A" if is_abnormal else "N"
        )
        return "\r".join([msh.serialize(), pid.serialize(), obx.serialize()])

    @classmethod
    def parse_message(cls, raw_hl7: str) -> Dict[str, Any]:
        lines = [l.strip() for l in raw_hl7.replace("\n", "\r").split("\r") if l.strip()]
        parsed = {"segments": [], "type": "ORU_R01"}
        for line in lines:
            fields = line.split("|")
            parsed["segments"].append({"segment_name": fields[0], "field_count": len(fields)})
        return parsed

class HL7ORU_R01Builder_22:
    """HL7 Segment & Message Transformer #22 for ORU_R01."""
    @classmethod
    def build_message(
        cls,
        patient_id: str,
        patient_name: str,
        obs_code: str,
        obs_name: str,
        obs_value: float,
        obs_unit: str,
        is_abnormal: bool = False
    ) -> str:
        msh = HL7MSH(message_control_id=f"CTRL-{patient_id}-022")
        pid = HL7PID(patient_identifier_list=f"{patient_id}^^^PulseSync", patient_name=patient_name)
        obx = HL7OBX(
            set_id=str(22),
            observation_identifier=f"{obs_code}^{obs_name}^LN",
            observation_value=str(obs_value),
            units=f"{obs_unit}^{obs_unit}^UCUM",
            abnormal_flags="A" if is_abnormal else "N"
        )
        return "\r".join([msh.serialize(), pid.serialize(), obx.serialize()])

    @classmethod
    def parse_message(cls, raw_hl7: str) -> Dict[str, Any]:
        lines = [l.strip() for l in raw_hl7.replace("\n", "\r").split("\r") if l.strip()]
        parsed = {"segments": [], "type": "ORU_R01"}
        for line in lines:
            fields = line.split("|")
            parsed["segments"].append({"segment_name": fields[0], "field_count": len(fields)})
        return parsed

class HL7ORU_R01Builder_23:
    """HL7 Segment & Message Transformer #23 for ORU_R01."""
    @classmethod
    def build_message(
        cls,
        patient_id: str,
        patient_name: str,
        obs_code: str,
        obs_name: str,
        obs_value: float,
        obs_unit: str,
        is_abnormal: bool = False
    ) -> str:
        msh = HL7MSH(message_control_id=f"CTRL-{patient_id}-023")
        pid = HL7PID(patient_identifier_list=f"{patient_id}^^^PulseSync", patient_name=patient_name)
        obx = HL7OBX(
            set_id=str(23),
            observation_identifier=f"{obs_code}^{obs_name}^LN",
            observation_value=str(obs_value),
            units=f"{obs_unit}^{obs_unit}^UCUM",
            abnormal_flags="A" if is_abnormal else "N"
        )
        return "\r".join([msh.serialize(), pid.serialize(), obx.serialize()])

    @classmethod
    def parse_message(cls, raw_hl7: str) -> Dict[str, Any]:
        lines = [l.strip() for l in raw_hl7.replace("\n", "\r").split("\r") if l.strip()]
        parsed = {"segments": [], "type": "ORU_R01"}
        for line in lines:
            fields = line.split("|")
            parsed["segments"].append({"segment_name": fields[0], "field_count": len(fields)})
        return parsed

class HL7ORU_R01Builder_24:
    """HL7 Segment & Message Transformer #24 for ORU_R01."""
    @classmethod
    def build_message(
        cls,
        patient_id: str,
        patient_name: str,
        obs_code: str,
        obs_name: str,
        obs_value: float,
        obs_unit: str,
        is_abnormal: bool = False
    ) -> str:
        msh = HL7MSH(message_control_id=f"CTRL-{patient_id}-024")
        pid = HL7PID(patient_identifier_list=f"{patient_id}^^^PulseSync", patient_name=patient_name)
        obx = HL7OBX(
            set_id=str(24),
            observation_identifier=f"{obs_code}^{obs_name}^LN",
            observation_value=str(obs_value),
            units=f"{obs_unit}^{obs_unit}^UCUM",
            abnormal_flags="A" if is_abnormal else "N"
        )
        return "\r".join([msh.serialize(), pid.serialize(), obx.serialize()])

    @classmethod
    def parse_message(cls, raw_hl7: str) -> Dict[str, Any]:
        lines = [l.strip() for l in raw_hl7.replace("\n", "\r").split("\r") if l.strip()]
        parsed = {"segments": [], "type": "ORU_R01"}
        for line in lines:
            fields = line.split("|")
            parsed["segments"].append({"segment_name": fields[0], "field_count": len(fields)})
        return parsed

class HL7ORU_R01Builder_25:
    """HL7 Segment & Message Transformer #25 for ORU_R01."""
    @classmethod
    def build_message(
        cls,
        patient_id: str,
        patient_name: str,
        obs_code: str,
        obs_name: str,
        obs_value: float,
        obs_unit: str,
        is_abnormal: bool = False
    ) -> str:
        msh = HL7MSH(message_control_id=f"CTRL-{patient_id}-025")
        pid = HL7PID(patient_identifier_list=f"{patient_id}^^^PulseSync", patient_name=patient_name)
        obx = HL7OBX(
            set_id=str(25),
            observation_identifier=f"{obs_code}^{obs_name}^LN",
            observation_value=str(obs_value),
            units=f"{obs_unit}^{obs_unit}^UCUM",
            abnormal_flags="A" if is_abnormal else "N"
        )
        return "\r".join([msh.serialize(), pid.serialize(), obx.serialize()])

    @classmethod
    def parse_message(cls, raw_hl7: str) -> Dict[str, Any]:
        lines = [l.strip() for l in raw_hl7.replace("\n", "\r").split("\r") if l.strip()]
        parsed = {"segments": [], "type": "ORU_R01"}
        for line in lines:
            fields = line.split("|")
            parsed["segments"].append({"segment_name": fields[0], "field_count": len(fields)})
        return parsed

class HL7ORU_R01Builder_26:
    """HL7 Segment & Message Transformer #26 for ORU_R01."""
    @classmethod
    def build_message(
        cls,
        patient_id: str,
        patient_name: str,
        obs_code: str,
        obs_name: str,
        obs_value: float,
        obs_unit: str,
        is_abnormal: bool = False
    ) -> str:
        msh = HL7MSH(message_control_id=f"CTRL-{patient_id}-026")
        pid = HL7PID(patient_identifier_list=f"{patient_id}^^^PulseSync", patient_name=patient_name)
        obx = HL7OBX(
            set_id=str(26),
            observation_identifier=f"{obs_code}^{obs_name}^LN",
            observation_value=str(obs_value),
            units=f"{obs_unit}^{obs_unit}^UCUM",
            abnormal_flags="A" if is_abnormal else "N"
        )
        return "\r".join([msh.serialize(), pid.serialize(), obx.serialize()])

    @classmethod
    def parse_message(cls, raw_hl7: str) -> Dict[str, Any]:
        lines = [l.strip() for l in raw_hl7.replace("\n", "\r").split("\r") if l.strip()]
        parsed = {"segments": [], "type": "ORU_R01"}
        for line in lines:
            fields = line.split("|")
            parsed["segments"].append({"segment_name": fields[0], "field_count": len(fields)})
        return parsed

class HL7ORU_R01Builder_27:
    """HL7 Segment & Message Transformer #27 for ORU_R01."""
    @classmethod
    def build_message(
        cls,
        patient_id: str,
        patient_name: str,
        obs_code: str,
        obs_name: str,
        obs_value: float,
        obs_unit: str,
        is_abnormal: bool = False
    ) -> str:
        msh = HL7MSH(message_control_id=f"CTRL-{patient_id}-027")
        pid = HL7PID(patient_identifier_list=f"{patient_id}^^^PulseSync", patient_name=patient_name)
        obx = HL7OBX(
            set_id=str(27),
            observation_identifier=f"{obs_code}^{obs_name}^LN",
            observation_value=str(obs_value),
            units=f"{obs_unit}^{obs_unit}^UCUM",
            abnormal_flags="A" if is_abnormal else "N"
        )
        return "\r".join([msh.serialize(), pid.serialize(), obx.serialize()])

    @classmethod
    def parse_message(cls, raw_hl7: str) -> Dict[str, Any]:
        lines = [l.strip() for l in raw_hl7.replace("\n", "\r").split("\r") if l.strip()]
        parsed = {"segments": [], "type": "ORU_R01"}
        for line in lines:
            fields = line.split("|")
            parsed["segments"].append({"segment_name": fields[0], "field_count": len(fields)})
        return parsed

class HL7ORU_R01Builder_28:
    """HL7 Segment & Message Transformer #28 for ORU_R01."""
    @classmethod
    def build_message(
        cls,
        patient_id: str,
        patient_name: str,
        obs_code: str,
        obs_name: str,
        obs_value: float,
        obs_unit: str,
        is_abnormal: bool = False
    ) -> str:
        msh = HL7MSH(message_control_id=f"CTRL-{patient_id}-028")
        pid = HL7PID(patient_identifier_list=f"{patient_id}^^^PulseSync", patient_name=patient_name)
        obx = HL7OBX(
            set_id=str(28),
            observation_identifier=f"{obs_code}^{obs_name}^LN",
            observation_value=str(obs_value),
            units=f"{obs_unit}^{obs_unit}^UCUM",
            abnormal_flags="A" if is_abnormal else "N"
        )
        return "\r".join([msh.serialize(), pid.serialize(), obx.serialize()])

    @classmethod
    def parse_message(cls, raw_hl7: str) -> Dict[str, Any]:
        lines = [l.strip() for l in raw_hl7.replace("\n", "\r").split("\r") if l.strip()]
        parsed = {"segments": [], "type": "ORU_R01"}
        for line in lines:
            fields = line.split("|")
            parsed["segments"].append({"segment_name": fields[0], "field_count": len(fields)})
        return parsed

class HL7ORU_R01Builder_29:
    """HL7 Segment & Message Transformer #29 for ORU_R01."""
    @classmethod
    def build_message(
        cls,
        patient_id: str,
        patient_name: str,
        obs_code: str,
        obs_name: str,
        obs_value: float,
        obs_unit: str,
        is_abnormal: bool = False
    ) -> str:
        msh = HL7MSH(message_control_id=f"CTRL-{patient_id}-029")
        pid = HL7PID(patient_identifier_list=f"{patient_id}^^^PulseSync", patient_name=patient_name)
        obx = HL7OBX(
            set_id=str(29),
            observation_identifier=f"{obs_code}^{obs_name}^LN",
            observation_value=str(obs_value),
            units=f"{obs_unit}^{obs_unit}^UCUM",
            abnormal_flags="A" if is_abnormal else "N"
        )
        return "\r".join([msh.serialize(), pid.serialize(), obx.serialize()])

    @classmethod
    def parse_message(cls, raw_hl7: str) -> Dict[str, Any]:
        lines = [l.strip() for l in raw_hl7.replace("\n", "\r").split("\r") if l.strip()]
        parsed = {"segments": [], "type": "ORU_R01"}
        for line in lines:
            fields = line.split("|")
            parsed["segments"].append({"segment_name": fields[0], "field_count": len(fields)})
        return parsed

class HL7ORU_R01Builder_30:
    """HL7 Segment & Message Transformer #30 for ORU_R01."""
    @classmethod
    def build_message(
        cls,
        patient_id: str,
        patient_name: str,
        obs_code: str,
        obs_name: str,
        obs_value: float,
        obs_unit: str,
        is_abnormal: bool = False
    ) -> str:
        msh = HL7MSH(message_control_id=f"CTRL-{patient_id}-030")
        pid = HL7PID(patient_identifier_list=f"{patient_id}^^^PulseSync", patient_name=patient_name)
        obx = HL7OBX(
            set_id=str(30),
            observation_identifier=f"{obs_code}^{obs_name}^LN",
            observation_value=str(obs_value),
            units=f"{obs_unit}^{obs_unit}^UCUM",
            abnormal_flags="A" if is_abnormal else "N"
        )
        return "\r".join([msh.serialize(), pid.serialize(), obx.serialize()])

    @classmethod
    def parse_message(cls, raw_hl7: str) -> Dict[str, Any]:
        lines = [l.strip() for l in raw_hl7.replace("\n", "\r").split("\r") if l.strip()]
        parsed = {"segments": [], "type": "ORU_R01"}
        for line in lines:
            fields = line.split("|")
            parsed["segments"].append({"segment_name": fields[0], "field_count": len(fields)})
        return parsed

class HL7ORU_R01Builder_31:
    """HL7 Segment & Message Transformer #31 for ORU_R01."""
    @classmethod
    def build_message(
        cls,
        patient_id: str,
        patient_name: str,
        obs_code: str,
        obs_name: str,
        obs_value: float,
        obs_unit: str,
        is_abnormal: bool = False
    ) -> str:
        msh = HL7MSH(message_control_id=f"CTRL-{patient_id}-031")
        pid = HL7PID(patient_identifier_list=f"{patient_id}^^^PulseSync", patient_name=patient_name)
        obx = HL7OBX(
            set_id=str(31),
            observation_identifier=f"{obs_code}^{obs_name}^LN",
            observation_value=str(obs_value),
            units=f"{obs_unit}^{obs_unit}^UCUM",
            abnormal_flags="A" if is_abnormal else "N"
        )
        return "\r".join([msh.serialize(), pid.serialize(), obx.serialize()])

    @classmethod
    def parse_message(cls, raw_hl7: str) -> Dict[str, Any]:
        lines = [l.strip() for l in raw_hl7.replace("\n", "\r").split("\r") if l.strip()]
        parsed = {"segments": [], "type": "ORU_R01"}
        for line in lines:
            fields = line.split("|")
            parsed["segments"].append({"segment_name": fields[0], "field_count": len(fields)})
        return parsed

class HL7ORU_R01Builder_32:
    """HL7 Segment & Message Transformer #32 for ORU_R01."""
    @classmethod
    def build_message(
        cls,
        patient_id: str,
        patient_name: str,
        obs_code: str,
        obs_name: str,
        obs_value: float,
        obs_unit: str,
        is_abnormal: bool = False
    ) -> str:
        msh = HL7MSH(message_control_id=f"CTRL-{patient_id}-032")
        pid = HL7PID(patient_identifier_list=f"{patient_id}^^^PulseSync", patient_name=patient_name)
        obx = HL7OBX(
            set_id=str(32),
            observation_identifier=f"{obs_code}^{obs_name}^LN",
            observation_value=str(obs_value),
            units=f"{obs_unit}^{obs_unit}^UCUM",
            abnormal_flags="A" if is_abnormal else "N"
        )
        return "\r".join([msh.serialize(), pid.serialize(), obx.serialize()])

    @classmethod
    def parse_message(cls, raw_hl7: str) -> Dict[str, Any]:
        lines = [l.strip() for l in raw_hl7.replace("\n", "\r").split("\r") if l.strip()]
        parsed = {"segments": [], "type": "ORU_R01"}
        for line in lines:
            fields = line.split("|")
            parsed["segments"].append({"segment_name": fields[0], "field_count": len(fields)})
        return parsed

class HL7ORU_R01Builder_33:
    """HL7 Segment & Message Transformer #33 for ORU_R01."""
    @classmethod
    def build_message(
        cls,
        patient_id: str,
        patient_name: str,
        obs_code: str,
        obs_name: str,
        obs_value: float,
        obs_unit: str,
        is_abnormal: bool = False
    ) -> str:
        msh = HL7MSH(message_control_id=f"CTRL-{patient_id}-033")
        pid = HL7PID(patient_identifier_list=f"{patient_id}^^^PulseSync", patient_name=patient_name)
        obx = HL7OBX(
            set_id=str(33),
            observation_identifier=f"{obs_code}^{obs_name}^LN",
            observation_value=str(obs_value),
            units=f"{obs_unit}^{obs_unit}^UCUM",
            abnormal_flags="A" if is_abnormal else "N"
        )
        return "\r".join([msh.serialize(), pid.serialize(), obx.serialize()])

    @classmethod
    def parse_message(cls, raw_hl7: str) -> Dict[str, Any]:
        lines = [l.strip() for l in raw_hl7.replace("\n", "\r").split("\r") if l.strip()]
        parsed = {"segments": [], "type": "ORU_R01"}
        for line in lines:
            fields = line.split("|")
            parsed["segments"].append({"segment_name": fields[0], "field_count": len(fields)})
        return parsed

class HL7ORU_R01Builder_34:
    """HL7 Segment & Message Transformer #34 for ORU_R01."""
    @classmethod
    def build_message(
        cls,
        patient_id: str,
        patient_name: str,
        obs_code: str,
        obs_name: str,
        obs_value: float,
        obs_unit: str,
        is_abnormal: bool = False
    ) -> str:
        msh = HL7MSH(message_control_id=f"CTRL-{patient_id}-034")
        pid = HL7PID(patient_identifier_list=f"{patient_id}^^^PulseSync", patient_name=patient_name)
        obx = HL7OBX(
            set_id=str(34),
            observation_identifier=f"{obs_code}^{obs_name}^LN",
            observation_value=str(obs_value),
            units=f"{obs_unit}^{obs_unit}^UCUM",
            abnormal_flags="A" if is_abnormal else "N"
        )
        return "\r".join([msh.serialize(), pid.serialize(), obx.serialize()])

    @classmethod
    def parse_message(cls, raw_hl7: str) -> Dict[str, Any]:
        lines = [l.strip() for l in raw_hl7.replace("\n", "\r").split("\r") if l.strip()]
        parsed = {"segments": [], "type": "ORU_R01"}
        for line in lines:
            fields = line.split("|")
            parsed["segments"].append({"segment_name": fields[0], "field_count": len(fields)})
        return parsed

class HL7ORU_R01Builder_35:
    """HL7 Segment & Message Transformer #35 for ORU_R01."""
    @classmethod
    def build_message(
        cls,
        patient_id: str,
        patient_name: str,
        obs_code: str,
        obs_name: str,
        obs_value: float,
        obs_unit: str,
        is_abnormal: bool = False
    ) -> str:
        msh = HL7MSH(message_control_id=f"CTRL-{patient_id}-035")
        pid = HL7PID(patient_identifier_list=f"{patient_id}^^^PulseSync", patient_name=patient_name)
        obx = HL7OBX(
            set_id=str(35),
            observation_identifier=f"{obs_code}^{obs_name}^LN",
            observation_value=str(obs_value),
            units=f"{obs_unit}^{obs_unit}^UCUM",
            abnormal_flags="A" if is_abnormal else "N"
        )
        return "\r".join([msh.serialize(), pid.serialize(), obx.serialize()])

    @classmethod
    def parse_message(cls, raw_hl7: str) -> Dict[str, Any]:
        lines = [l.strip() for l in raw_hl7.replace("\n", "\r").split("\r") if l.strip()]
        parsed = {"segments": [], "type": "ORU_R01"}
        for line in lines:
            fields = line.split("|")
            parsed["segments"].append({"segment_name": fields[0], "field_count": len(fields)})
        return parsed

class HL7ORU_R01Builder_36:
    """HL7 Segment & Message Transformer #36 for ORU_R01."""
    @classmethod
    def build_message(
        cls,
        patient_id: str,
        patient_name: str,
        obs_code: str,
        obs_name: str,
        obs_value: float,
        obs_unit: str,
        is_abnormal: bool = False
    ) -> str:
        msh = HL7MSH(message_control_id=f"CTRL-{patient_id}-036")
        pid = HL7PID(patient_identifier_list=f"{patient_id}^^^PulseSync", patient_name=patient_name)
        obx = HL7OBX(
            set_id=str(36),
            observation_identifier=f"{obs_code}^{obs_name}^LN",
            observation_value=str(obs_value),
            units=f"{obs_unit}^{obs_unit}^UCUM",
            abnormal_flags="A" if is_abnormal else "N"
        )
        return "\r".join([msh.serialize(), pid.serialize(), obx.serialize()])

    @classmethod
    def parse_message(cls, raw_hl7: str) -> Dict[str, Any]:
        lines = [l.strip() for l in raw_hl7.replace("\n", "\r").split("\r") if l.strip()]
        parsed = {"segments": [], "type": "ORU_R01"}
        for line in lines:
            fields = line.split("|")
            parsed["segments"].append({"segment_name": fields[0], "field_count": len(fields)})
        return parsed

class HL7ORU_R01Builder_37:
    """HL7 Segment & Message Transformer #37 for ORU_R01."""
    @classmethod
    def build_message(
        cls,
        patient_id: str,
        patient_name: str,
        obs_code: str,
        obs_name: str,
        obs_value: float,
        obs_unit: str,
        is_abnormal: bool = False
    ) -> str:
        msh = HL7MSH(message_control_id=f"CTRL-{patient_id}-037")
        pid = HL7PID(patient_identifier_list=f"{patient_id}^^^PulseSync", patient_name=patient_name)
        obx = HL7OBX(
            set_id=str(37),
            observation_identifier=f"{obs_code}^{obs_name}^LN",
            observation_value=str(obs_value),
            units=f"{obs_unit}^{obs_unit}^UCUM",
            abnormal_flags="A" if is_abnormal else "N"
        )
        return "\r".join([msh.serialize(), pid.serialize(), obx.serialize()])

    @classmethod
    def parse_message(cls, raw_hl7: str) -> Dict[str, Any]:
        lines = [l.strip() for l in raw_hl7.replace("\n", "\r").split("\r") if l.strip()]
        parsed = {"segments": [], "type": "ORU_R01"}
        for line in lines:
            fields = line.split("|")
            parsed["segments"].append({"segment_name": fields[0], "field_count": len(fields)})
        return parsed

class HL7ORU_R01Builder_38:
    """HL7 Segment & Message Transformer #38 for ORU_R01."""
    @classmethod
    def build_message(
        cls,
        patient_id: str,
        patient_name: str,
        obs_code: str,
        obs_name: str,
        obs_value: float,
        obs_unit: str,
        is_abnormal: bool = False
    ) -> str:
        msh = HL7MSH(message_control_id=f"CTRL-{patient_id}-038")
        pid = HL7PID(patient_identifier_list=f"{patient_id}^^^PulseSync", patient_name=patient_name)
        obx = HL7OBX(
            set_id=str(38),
            observation_identifier=f"{obs_code}^{obs_name}^LN",
            observation_value=str(obs_value),
            units=f"{obs_unit}^{obs_unit}^UCUM",
            abnormal_flags="A" if is_abnormal else "N"
        )
        return "\r".join([msh.serialize(), pid.serialize(), obx.serialize()])

    @classmethod
    def parse_message(cls, raw_hl7: str) -> Dict[str, Any]:
        lines = [l.strip() for l in raw_hl7.replace("\n", "\r").split("\r") if l.strip()]
        parsed = {"segments": [], "type": "ORU_R01"}
        for line in lines:
            fields = line.split("|")
            parsed["segments"].append({"segment_name": fields[0], "field_count": len(fields)})
        return parsed

class HL7ORU_R01Builder_39:
    """HL7 Segment & Message Transformer #39 for ORU_R01."""
    @classmethod
    def build_message(
        cls,
        patient_id: str,
        patient_name: str,
        obs_code: str,
        obs_name: str,
        obs_value: float,
        obs_unit: str,
        is_abnormal: bool = False
    ) -> str:
        msh = HL7MSH(message_control_id=f"CTRL-{patient_id}-039")
        pid = HL7PID(patient_identifier_list=f"{patient_id}^^^PulseSync", patient_name=patient_name)
        obx = HL7OBX(
            set_id=str(39),
            observation_identifier=f"{obs_code}^{obs_name}^LN",
            observation_value=str(obs_value),
            units=f"{obs_unit}^{obs_unit}^UCUM",
            abnormal_flags="A" if is_abnormal else "N"
        )
        return "\r".join([msh.serialize(), pid.serialize(), obx.serialize()])

    @classmethod
    def parse_message(cls, raw_hl7: str) -> Dict[str, Any]:
        lines = [l.strip() for l in raw_hl7.replace("\n", "\r").split("\r") if l.strip()]
        parsed = {"segments": [], "type": "ORU_R01"}
        for line in lines:
            fields = line.split("|")
            parsed["segments"].append({"segment_name": fields[0], "field_count": len(fields)})
        return parsed

class HL7ORU_R01Builder_40:
    """HL7 Segment & Message Transformer #40 for ORU_R01."""
    @classmethod
    def build_message(
        cls,
        patient_id: str,
        patient_name: str,
        obs_code: str,
        obs_name: str,
        obs_value: float,
        obs_unit: str,
        is_abnormal: bool = False
    ) -> str:
        msh = HL7MSH(message_control_id=f"CTRL-{patient_id}-040")
        pid = HL7PID(patient_identifier_list=f"{patient_id}^^^PulseSync", patient_name=patient_name)
        obx = HL7OBX(
            set_id=str(40),
            observation_identifier=f"{obs_code}^{obs_name}^LN",
            observation_value=str(obs_value),
            units=f"{obs_unit}^{obs_unit}^UCUM",
            abnormal_flags="A" if is_abnormal else "N"
        )
        return "\r".join([msh.serialize(), pid.serialize(), obx.serialize()])

    @classmethod
    def parse_message(cls, raw_hl7: str) -> Dict[str, Any]:
        lines = [l.strip() for l in raw_hl7.replace("\n", "\r").split("\r") if l.strip()]
        parsed = {"segments": [], "type": "ORU_R01"}
        for line in lines:
            fields = line.split("|")
            parsed["segments"].append({"segment_name": fields[0], "field_count": len(fields)})
        return parsed

class HL7ORU_R01Builder_41:
    """HL7 Segment & Message Transformer #41 for ORU_R01."""
    @classmethod
    def build_message(
        cls,
        patient_id: str,
        patient_name: str,
        obs_code: str,
        obs_name: str,
        obs_value: float,
        obs_unit: str,
        is_abnormal: bool = False
    ) -> str:
        msh = HL7MSH(message_control_id=f"CTRL-{patient_id}-041")
        pid = HL7PID(patient_identifier_list=f"{patient_id}^^^PulseSync", patient_name=patient_name)
        obx = HL7OBX(
            set_id=str(41),
            observation_identifier=f"{obs_code}^{obs_name}^LN",
            observation_value=str(obs_value),
            units=f"{obs_unit}^{obs_unit}^UCUM",
            abnormal_flags="A" if is_abnormal else "N"
        )
        return "\r".join([msh.serialize(), pid.serialize(), obx.serialize()])

    @classmethod
    def parse_message(cls, raw_hl7: str) -> Dict[str, Any]:
        lines = [l.strip() for l in raw_hl7.replace("\n", "\r").split("\r") if l.strip()]
        parsed = {"segments": [], "type": "ORU_R01"}
        for line in lines:
            fields = line.split("|")
            parsed["segments"].append({"segment_name": fields[0], "field_count": len(fields)})
        return parsed

class HL7ORU_R01Builder_42:
    """HL7 Segment & Message Transformer #42 for ORU_R01."""
    @classmethod
    def build_message(
        cls,
        patient_id: str,
        patient_name: str,
        obs_code: str,
        obs_name: str,
        obs_value: float,
        obs_unit: str,
        is_abnormal: bool = False
    ) -> str:
        msh = HL7MSH(message_control_id=f"CTRL-{patient_id}-042")
        pid = HL7PID(patient_identifier_list=f"{patient_id}^^^PulseSync", patient_name=patient_name)
        obx = HL7OBX(
            set_id=str(42),
            observation_identifier=f"{obs_code}^{obs_name}^LN",
            observation_value=str(obs_value),
            units=f"{obs_unit}^{obs_unit}^UCUM",
            abnormal_flags="A" if is_abnormal else "N"
        )
        return "\r".join([msh.serialize(), pid.serialize(), obx.serialize()])

    @classmethod
    def parse_message(cls, raw_hl7: str) -> Dict[str, Any]:
        lines = [l.strip() for l in raw_hl7.replace("\n", "\r").split("\r") if l.strip()]
        parsed = {"segments": [], "type": "ORU_R01"}
        for line in lines:
            fields = line.split("|")
            parsed["segments"].append({"segment_name": fields[0], "field_count": len(fields)})
        return parsed

class HL7ORU_R01Builder_43:
    """HL7 Segment & Message Transformer #43 for ORU_R01."""
    @classmethod
    def build_message(
        cls,
        patient_id: str,
        patient_name: str,
        obs_code: str,
        obs_name: str,
        obs_value: float,
        obs_unit: str,
        is_abnormal: bool = False
    ) -> str:
        msh = HL7MSH(message_control_id=f"CTRL-{patient_id}-043")
        pid = HL7PID(patient_identifier_list=f"{patient_id}^^^PulseSync", patient_name=patient_name)
        obx = HL7OBX(
            set_id=str(43),
            observation_identifier=f"{obs_code}^{obs_name}^LN",
            observation_value=str(obs_value),
            units=f"{obs_unit}^{obs_unit}^UCUM",
            abnormal_flags="A" if is_abnormal else "N"
        )
        return "\r".join([msh.serialize(), pid.serialize(), obx.serialize()])

    @classmethod
    def parse_message(cls, raw_hl7: str) -> Dict[str, Any]:
        lines = [l.strip() for l in raw_hl7.replace("\n", "\r").split("\r") if l.strip()]
        parsed = {"segments": [], "type": "ORU_R01"}
        for line in lines:
            fields = line.split("|")
            parsed["segments"].append({"segment_name": fields[0], "field_count": len(fields)})
        return parsed

class HL7ORU_R01Builder_44:
    """HL7 Segment & Message Transformer #44 for ORU_R01."""
    @classmethod
    def build_message(
        cls,
        patient_id: str,
        patient_name: str,
        obs_code: str,
        obs_name: str,
        obs_value: float,
        obs_unit: str,
        is_abnormal: bool = False
    ) -> str:
        msh = HL7MSH(message_control_id=f"CTRL-{patient_id}-044")
        pid = HL7PID(patient_identifier_list=f"{patient_id}^^^PulseSync", patient_name=patient_name)
        obx = HL7OBX(
            set_id=str(44),
            observation_identifier=f"{obs_code}^{obs_name}^LN",
            observation_value=str(obs_value),
            units=f"{obs_unit}^{obs_unit}^UCUM",
            abnormal_flags="A" if is_abnormal else "N"
        )
        return "\r".join([msh.serialize(), pid.serialize(), obx.serialize()])

    @classmethod
    def parse_message(cls, raw_hl7: str) -> Dict[str, Any]:
        lines = [l.strip() for l in raw_hl7.replace("\n", "\r").split("\r") if l.strip()]
        parsed = {"segments": [], "type": "ORU_R01"}
        for line in lines:
            fields = line.split("|")
            parsed["segments"].append({"segment_name": fields[0], "field_count": len(fields)})
        return parsed

class HL7ORU_R01Builder_45:
    """HL7 Segment & Message Transformer #45 for ORU_R01."""
    @classmethod
    def build_message(
        cls,
        patient_id: str,
        patient_name: str,
        obs_code: str,
        obs_name: str,
        obs_value: float,
        obs_unit: str,
        is_abnormal: bool = False
    ) -> str:
        msh = HL7MSH(message_control_id=f"CTRL-{patient_id}-045")
        pid = HL7PID(patient_identifier_list=f"{patient_id}^^^PulseSync", patient_name=patient_name)
        obx = HL7OBX(
            set_id=str(45),
            observation_identifier=f"{obs_code}^{obs_name}^LN",
            observation_value=str(obs_value),
            units=f"{obs_unit}^{obs_unit}^UCUM",
            abnormal_flags="A" if is_abnormal else "N"
        )
        return "\r".join([msh.serialize(), pid.serialize(), obx.serialize()])

    @classmethod
    def parse_message(cls, raw_hl7: str) -> Dict[str, Any]:
        lines = [l.strip() for l in raw_hl7.replace("\n", "\r").split("\r") if l.strip()]
        parsed = {"segments": [], "type": "ORU_R01"}
        for line in lines:
            fields = line.split("|")
            parsed["segments"].append({"segment_name": fields[0], "field_count": len(fields)})
        return parsed

class HL7ORU_R01Builder_46:
    """HL7 Segment & Message Transformer #46 for ORU_R01."""
    @classmethod
    def build_message(
        cls,
        patient_id: str,
        patient_name: str,
        obs_code: str,
        obs_name: str,
        obs_value: float,
        obs_unit: str,
        is_abnormal: bool = False
    ) -> str:
        msh = HL7MSH(message_control_id=f"CTRL-{patient_id}-046")
        pid = HL7PID(patient_identifier_list=f"{patient_id}^^^PulseSync", patient_name=patient_name)
        obx = HL7OBX(
            set_id=str(46),
            observation_identifier=f"{obs_code}^{obs_name}^LN",
            observation_value=str(obs_value),
            units=f"{obs_unit}^{obs_unit}^UCUM",
            abnormal_flags="A" if is_abnormal else "N"
        )
        return "\r".join([msh.serialize(), pid.serialize(), obx.serialize()])

    @classmethod
    def parse_message(cls, raw_hl7: str) -> Dict[str, Any]:
        lines = [l.strip() for l in raw_hl7.replace("\n", "\r").split("\r") if l.strip()]
        parsed = {"segments": [], "type": "ORU_R01"}
        for line in lines:
            fields = line.split("|")
            parsed["segments"].append({"segment_name": fields[0], "field_count": len(fields)})
        return parsed

class HL7ORU_R01Builder_47:
    """HL7 Segment & Message Transformer #47 for ORU_R01."""
    @classmethod
    def build_message(
        cls,
        patient_id: str,
        patient_name: str,
        obs_code: str,
        obs_name: str,
        obs_value: float,
        obs_unit: str,
        is_abnormal: bool = False
    ) -> str:
        msh = HL7MSH(message_control_id=f"CTRL-{patient_id}-047")
        pid = HL7PID(patient_identifier_list=f"{patient_id}^^^PulseSync", patient_name=patient_name)
        obx = HL7OBX(
            set_id=str(47),
            observation_identifier=f"{obs_code}^{obs_name}^LN",
            observation_value=str(obs_value),
            units=f"{obs_unit}^{obs_unit}^UCUM",
            abnormal_flags="A" if is_abnormal else "N"
        )
        return "\r".join([msh.serialize(), pid.serialize(), obx.serialize()])

    @classmethod
    def parse_message(cls, raw_hl7: str) -> Dict[str, Any]:
        lines = [l.strip() for l in raw_hl7.replace("\n", "\r").split("\r") if l.strip()]
        parsed = {"segments": [], "type": "ORU_R01"}
        for line in lines:
            fields = line.split("|")
            parsed["segments"].append({"segment_name": fields[0], "field_count": len(fields)})
        return parsed

class HL7ORU_R01Builder_48:
    """HL7 Segment & Message Transformer #48 for ORU_R01."""
    @classmethod
    def build_message(
        cls,
        patient_id: str,
        patient_name: str,
        obs_code: str,
        obs_name: str,
        obs_value: float,
        obs_unit: str,
        is_abnormal: bool = False
    ) -> str:
        msh = HL7MSH(message_control_id=f"CTRL-{patient_id}-048")
        pid = HL7PID(patient_identifier_list=f"{patient_id}^^^PulseSync", patient_name=patient_name)
        obx = HL7OBX(
            set_id=str(48),
            observation_identifier=f"{obs_code}^{obs_name}^LN",
            observation_value=str(obs_value),
            units=f"{obs_unit}^{obs_unit}^UCUM",
            abnormal_flags="A" if is_abnormal else "N"
        )
        return "\r".join([msh.serialize(), pid.serialize(), obx.serialize()])

    @classmethod
    def parse_message(cls, raw_hl7: str) -> Dict[str, Any]:
        lines = [l.strip() for l in raw_hl7.replace("\n", "\r").split("\r") if l.strip()]
        parsed = {"segments": [], "type": "ORU_R01"}
        for line in lines:
            fields = line.split("|")
            parsed["segments"].append({"segment_name": fields[0], "field_count": len(fields)})
        return parsed

class HL7ORU_R01Builder_49:
    """HL7 Segment & Message Transformer #49 for ORU_R01."""
    @classmethod
    def build_message(
        cls,
        patient_id: str,
        patient_name: str,
        obs_code: str,
        obs_name: str,
        obs_value: float,
        obs_unit: str,
        is_abnormal: bool = False
    ) -> str:
        msh = HL7MSH(message_control_id=f"CTRL-{patient_id}-049")
        pid = HL7PID(patient_identifier_list=f"{patient_id}^^^PulseSync", patient_name=patient_name)
        obx = HL7OBX(
            set_id=str(49),
            observation_identifier=f"{obs_code}^{obs_name}^LN",
            observation_value=str(obs_value),
            units=f"{obs_unit}^{obs_unit}^UCUM",
            abnormal_flags="A" if is_abnormal else "N"
        )
        return "\r".join([msh.serialize(), pid.serialize(), obx.serialize()])

    @classmethod
    def parse_message(cls, raw_hl7: str) -> Dict[str, Any]:
        lines = [l.strip() for l in raw_hl7.replace("\n", "\r").split("\r") if l.strip()]
        parsed = {"segments": [], "type": "ORU_R01"}
        for line in lines:
            fields = line.split("|")
            parsed["segments"].append({"segment_name": fields[0], "field_count": len(fields)})
        return parsed

class HL7ORU_R01Builder_50:
    """HL7 Segment & Message Transformer #50 for ORU_R01."""
    @classmethod
    def build_message(
        cls,
        patient_id: str,
        patient_name: str,
        obs_code: str,
        obs_name: str,
        obs_value: float,
        obs_unit: str,
        is_abnormal: bool = False
    ) -> str:
        msh = HL7MSH(message_control_id=f"CTRL-{patient_id}-050")
        pid = HL7PID(patient_identifier_list=f"{patient_id}^^^PulseSync", patient_name=patient_name)
        obx = HL7OBX(
            set_id=str(50),
            observation_identifier=f"{obs_code}^{obs_name}^LN",
            observation_value=str(obs_value),
            units=f"{obs_unit}^{obs_unit}^UCUM",
            abnormal_flags="A" if is_abnormal else "N"
        )
        return "\r".join([msh.serialize(), pid.serialize(), obx.serialize()])

    @classmethod
    def parse_message(cls, raw_hl7: str) -> Dict[str, Any]:
        lines = [l.strip() for l in raw_hl7.replace("\n", "\r").split("\r") if l.strip()]
        parsed = {"segments": [], "type": "ORU_R01"}
        for line in lines:
            fields = line.split("|")
            parsed["segments"].append({"segment_name": fields[0], "field_count": len(fields)})
        return parsed
