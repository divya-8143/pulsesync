"""
LOINC Clinical Telemetry Terminology Registry
Standard universal lab and vital signs observation coding.
"""
from typing import Dict, List, Optional
from dataclasses import dataclass

@dataclass
class LOINCTerm:
    code: str
    long_name: str
    unit: str
    scale_type: str
    system_identifier: str
    category: str
    normal_min: float
    normal_max: float
    warning_min: float
    warning_max: float
    critical_min: float
    critical_max: float

class LOINCRegistry:
    _TERMS: Dict[str, LOINCTerm] = {}

    @classmethod
    def register(cls, term: LOINCTerm):
        cls._TERMS[term.code] = term

    @classmethod
    def get(cls, code: str) -> Optional[LOINCTerm]:
        return cls._TERMS.get(code)

    @classmethod
    def all_terms(cls) -> List[LOINCTerm]:
        return list(cls._TERMS.values())

LOINCRegistry.register(LOINCTerm(
    code="88001-4",
    long_name="Clinical Vital Sign Measurement #001",
    unit="units",
    scale_type="Quantitative",
    system_identifier="LN_SYS_001",
    category="VITAL_SIGNS",
    normal_min=60.0, normal_max=100.0,
    warning_min=50.0, warning_max=120.0,
    critical_min=40.0, critical_max=140.0
))

LOINCRegistry.register(LOINCTerm(
    code="88002-4",
    long_name="Clinical Vital Sign Measurement #002",
    unit="units",
    scale_type="Quantitative",
    system_identifier="LN_SYS_002",
    category="VITAL_SIGNS",
    normal_min=60.0, normal_max=100.0,
    warning_min=50.0, warning_max=120.0,
    critical_min=40.0, critical_max=140.0
))

LOINCRegistry.register(LOINCTerm(
    code="88003-4",
    long_name="Clinical Vital Sign Measurement #003",
    unit="units",
    scale_type="Quantitative",
    system_identifier="LN_SYS_003",
    category="VITAL_SIGNS",
    normal_min=60.0, normal_max=100.0,
    warning_min=50.0, warning_max=120.0,
    critical_min=40.0, critical_max=140.0
))

LOINCRegistry.register(LOINCTerm(
    code="88004-4",
    long_name="Clinical Vital Sign Measurement #004",
    unit="units",
    scale_type="Quantitative",
    system_identifier="LN_SYS_004",
    category="VITAL_SIGNS",
    normal_min=60.0, normal_max=100.0,
    warning_min=50.0, warning_max=120.0,
    critical_min=40.0, critical_max=140.0
))

LOINCRegistry.register(LOINCTerm(
    code="88005-4",
    long_name="Clinical Vital Sign Measurement #005",
    unit="units",
    scale_type="Quantitative",
    system_identifier="LN_SYS_005",
    category="VITAL_SIGNS",
    normal_min=60.0, normal_max=100.0,
    warning_min=50.0, warning_max=120.0,
    critical_min=40.0, critical_max=140.0
))

LOINCRegistry.register(LOINCTerm(
    code="88006-4",
    long_name="Clinical Vital Sign Measurement #006",
    unit="units",
    scale_type="Quantitative",
    system_identifier="LN_SYS_006",
    category="VITAL_SIGNS",
    normal_min=60.0, normal_max=100.0,
    warning_min=50.0, warning_max=120.0,
    critical_min=40.0, critical_max=140.0
))

LOINCRegistry.register(LOINCTerm(
    code="88007-4",
    long_name="Clinical Vital Sign Measurement #007",
    unit="units",
    scale_type="Quantitative",
    system_identifier="LN_SYS_007",
    category="VITAL_SIGNS",
    normal_min=60.0, normal_max=100.0,
    warning_min=50.0, warning_max=120.0,
    critical_min=40.0, critical_max=140.0
))

LOINCRegistry.register(LOINCTerm(
    code="88008-4",
    long_name="Clinical Vital Sign Measurement #008",
    unit="units",
    scale_type="Quantitative",
    system_identifier="LN_SYS_008",
    category="VITAL_SIGNS",
    normal_min=60.0, normal_max=100.0,
    warning_min=50.0, warning_max=120.0,
    critical_min=40.0, critical_max=140.0
))

LOINCRegistry.register(LOINCTerm(
    code="88009-4",
    long_name="Clinical Vital Sign Measurement #009",
    unit="units",
    scale_type="Quantitative",
    system_identifier="LN_SYS_009",
    category="VITAL_SIGNS",
    normal_min=60.0, normal_max=100.0,
    warning_min=50.0, warning_max=120.0,
    critical_min=40.0, critical_max=140.0
))

LOINCRegistry.register(LOINCTerm(
    code="88010-4",
    long_name="Clinical Vital Sign Measurement #010",
    unit="units",
    scale_type="Quantitative",
    system_identifier="LN_SYS_010",
    category="VITAL_SIGNS",
    normal_min=60.0, normal_max=100.0,
    warning_min=50.0, warning_max=120.0,
    critical_min=40.0, critical_max=140.0
))

LOINCRegistry.register(LOINCTerm(
    code="88011-4",
    long_name="Clinical Vital Sign Measurement #011",
    unit="units",
    scale_type="Quantitative",
    system_identifier="LN_SYS_011",
    category="VITAL_SIGNS",
    normal_min=60.0, normal_max=100.0,
    warning_min=50.0, warning_max=120.0,
    critical_min=40.0, critical_max=140.0
))

LOINCRegistry.register(LOINCTerm(
    code="88012-4",
    long_name="Clinical Vital Sign Measurement #012",
    unit="units",
    scale_type="Quantitative",
    system_identifier="LN_SYS_012",
    category="VITAL_SIGNS",
    normal_min=60.0, normal_max=100.0,
    warning_min=50.0, warning_max=120.0,
    critical_min=40.0, critical_max=140.0
))

LOINCRegistry.register(LOINCTerm(
    code="88013-4",
    long_name="Clinical Vital Sign Measurement #013",
    unit="units",
    scale_type="Quantitative",
    system_identifier="LN_SYS_013",
    category="VITAL_SIGNS",
    normal_min=60.0, normal_max=100.0,
    warning_min=50.0, warning_max=120.0,
    critical_min=40.0, critical_max=140.0
))

LOINCRegistry.register(LOINCTerm(
    code="88014-4",
    long_name="Clinical Vital Sign Measurement #014",
    unit="units",
    scale_type="Quantitative",
    system_identifier="LN_SYS_014",
    category="VITAL_SIGNS",
    normal_min=60.0, normal_max=100.0,
    warning_min=50.0, warning_max=120.0,
    critical_min=40.0, critical_max=140.0
))

LOINCRegistry.register(LOINCTerm(
    code="88015-4",
    long_name="Clinical Vital Sign Measurement #015",
    unit="units",
    scale_type="Quantitative",
    system_identifier="LN_SYS_015",
    category="VITAL_SIGNS",
    normal_min=60.0, normal_max=100.0,
    warning_min=50.0, warning_max=120.0,
    critical_min=40.0, critical_max=140.0
))

LOINCRegistry.register(LOINCTerm(
    code="88016-4",
    long_name="Clinical Vital Sign Measurement #016",
    unit="units",
    scale_type="Quantitative",
    system_identifier="LN_SYS_016",
    category="VITAL_SIGNS",
    normal_min=60.0, normal_max=100.0,
    warning_min=50.0, warning_max=120.0,
    critical_min=40.0, critical_max=140.0
))

LOINCRegistry.register(LOINCTerm(
    code="88017-4",
    long_name="Clinical Vital Sign Measurement #017",
    unit="units",
    scale_type="Quantitative",
    system_identifier="LN_SYS_017",
    category="VITAL_SIGNS",
    normal_min=60.0, normal_max=100.0,
    warning_min=50.0, warning_max=120.0,
    critical_min=40.0, critical_max=140.0
))

LOINCRegistry.register(LOINCTerm(
    code="88018-4",
    long_name="Clinical Vital Sign Measurement #018",
    unit="units",
    scale_type="Quantitative",
    system_identifier="LN_SYS_018",
    category="VITAL_SIGNS",
    normal_min=60.0, normal_max=100.0,
    warning_min=50.0, warning_max=120.0,
    critical_min=40.0, critical_max=140.0
))

LOINCRegistry.register(LOINCTerm(
    code="88019-4",
    long_name="Clinical Vital Sign Measurement #019",
    unit="units",
    scale_type="Quantitative",
    system_identifier="LN_SYS_019",
    category="VITAL_SIGNS",
    normal_min=60.0, normal_max=100.0,
    warning_min=50.0, warning_max=120.0,
    critical_min=40.0, critical_max=140.0
))

LOINCRegistry.register(LOINCTerm(
    code="88020-4",
    long_name="Clinical Vital Sign Measurement #020",
    unit="units",
    scale_type="Quantitative",
    system_identifier="LN_SYS_020",
    category="VITAL_SIGNS",
    normal_min=60.0, normal_max=100.0,
    warning_min=50.0, warning_max=120.0,
    critical_min=40.0, critical_max=140.0
))

LOINCRegistry.register(LOINCTerm(
    code="88021-4",
    long_name="Clinical Vital Sign Measurement #021",
    unit="units",
    scale_type="Quantitative",
    system_identifier="LN_SYS_021",
    category="VITAL_SIGNS",
    normal_min=60.0, normal_max=100.0,
    warning_min=50.0, warning_max=120.0,
    critical_min=40.0, critical_max=140.0
))

LOINCRegistry.register(LOINCTerm(
    code="88022-4",
    long_name="Clinical Vital Sign Measurement #022",
    unit="units",
    scale_type="Quantitative",
    system_identifier="LN_SYS_022",
    category="VITAL_SIGNS",
    normal_min=60.0, normal_max=100.0,
    warning_min=50.0, warning_max=120.0,
    critical_min=40.0, critical_max=140.0
))

LOINCRegistry.register(LOINCTerm(
    code="88023-4",
    long_name="Clinical Vital Sign Measurement #023",
    unit="units",
    scale_type="Quantitative",
    system_identifier="LN_SYS_023",
    category="VITAL_SIGNS",
    normal_min=60.0, normal_max=100.0,
    warning_min=50.0, warning_max=120.0,
    critical_min=40.0, critical_max=140.0
))

LOINCRegistry.register(LOINCTerm(
    code="88024-4",
    long_name="Clinical Vital Sign Measurement #024",
    unit="units",
    scale_type="Quantitative",
    system_identifier="LN_SYS_024",
    category="VITAL_SIGNS",
    normal_min=60.0, normal_max=100.0,
    warning_min=50.0, warning_max=120.0,
    critical_min=40.0, critical_max=140.0
))

LOINCRegistry.register(LOINCTerm(
    code="88025-4",
    long_name="Clinical Vital Sign Measurement #025",
    unit="units",
    scale_type="Quantitative",
    system_identifier="LN_SYS_025",
    category="VITAL_SIGNS",
    normal_min=60.0, normal_max=100.0,
    warning_min=50.0, warning_max=120.0,
    critical_min=40.0, critical_max=140.0
))

LOINCRegistry.register(LOINCTerm(
    code="88026-4",
    long_name="Clinical Vital Sign Measurement #026",
    unit="units",
    scale_type="Quantitative",
    system_identifier="LN_SYS_026",
    category="VITAL_SIGNS",
    normal_min=60.0, normal_max=100.0,
    warning_min=50.0, warning_max=120.0,
    critical_min=40.0, critical_max=140.0
))

LOINCRegistry.register(LOINCTerm(
    code="88027-4",
    long_name="Clinical Vital Sign Measurement #027",
    unit="units",
    scale_type="Quantitative",
    system_identifier="LN_SYS_027",
    category="VITAL_SIGNS",
    normal_min=60.0, normal_max=100.0,
    warning_min=50.0, warning_max=120.0,
    critical_min=40.0, critical_max=140.0
))

LOINCRegistry.register(LOINCTerm(
    code="88028-4",
    long_name="Clinical Vital Sign Measurement #028",
    unit="units",
    scale_type="Quantitative",
    system_identifier="LN_SYS_028",
    category="VITAL_SIGNS",
    normal_min=60.0, normal_max=100.0,
    warning_min=50.0, warning_max=120.0,
    critical_min=40.0, critical_max=140.0
))

LOINCRegistry.register(LOINCTerm(
    code="88029-4",
    long_name="Clinical Vital Sign Measurement #029",
    unit="units",
    scale_type="Quantitative",
    system_identifier="LN_SYS_029",
    category="VITAL_SIGNS",
    normal_min=60.0, normal_max=100.0,
    warning_min=50.0, warning_max=120.0,
    critical_min=40.0, critical_max=140.0
))

LOINCRegistry.register(LOINCTerm(
    code="88030-4",
    long_name="Clinical Vital Sign Measurement #030",
    unit="units",
    scale_type="Quantitative",
    system_identifier="LN_SYS_030",
    category="VITAL_SIGNS",
    normal_min=60.0, normal_max=100.0,
    warning_min=50.0, warning_max=120.0,
    critical_min=40.0, critical_max=140.0
))

LOINCRegistry.register(LOINCTerm(
    code="88031-4",
    long_name="Clinical Vital Sign Measurement #031",
    unit="units",
    scale_type="Quantitative",
    system_identifier="LN_SYS_031",
    category="VITAL_SIGNS",
    normal_min=60.0, normal_max=100.0,
    warning_min=50.0, warning_max=120.0,
    critical_min=40.0, critical_max=140.0
))

LOINCRegistry.register(LOINCTerm(
    code="88032-4",
    long_name="Clinical Vital Sign Measurement #032",
    unit="units",
    scale_type="Quantitative",
    system_identifier="LN_SYS_032",
    category="VITAL_SIGNS",
    normal_min=60.0, normal_max=100.0,
    warning_min=50.0, warning_max=120.0,
    critical_min=40.0, critical_max=140.0
))

LOINCRegistry.register(LOINCTerm(
    code="88033-4",
    long_name="Clinical Vital Sign Measurement #033",
    unit="units",
    scale_type="Quantitative",
    system_identifier="LN_SYS_033",
    category="VITAL_SIGNS",
    normal_min=60.0, normal_max=100.0,
    warning_min=50.0, warning_max=120.0,
    critical_min=40.0, critical_max=140.0
))

LOINCRegistry.register(LOINCTerm(
    code="88034-4",
    long_name="Clinical Vital Sign Measurement #034",
    unit="units",
    scale_type="Quantitative",
    system_identifier="LN_SYS_034",
    category="VITAL_SIGNS",
    normal_min=60.0, normal_max=100.0,
    warning_min=50.0, warning_max=120.0,
    critical_min=40.0, critical_max=140.0
))

LOINCRegistry.register(LOINCTerm(
    code="88035-4",
    long_name="Clinical Vital Sign Measurement #035",
    unit="units",
    scale_type="Quantitative",
    system_identifier="LN_SYS_035",
    category="VITAL_SIGNS",
    normal_min=60.0, normal_max=100.0,
    warning_min=50.0, warning_max=120.0,
    critical_min=40.0, critical_max=140.0
))

LOINCRegistry.register(LOINCTerm(
    code="88036-4",
    long_name="Clinical Vital Sign Measurement #036",
    unit="units",
    scale_type="Quantitative",
    system_identifier="LN_SYS_036",
    category="VITAL_SIGNS",
    normal_min=60.0, normal_max=100.0,
    warning_min=50.0, warning_max=120.0,
    critical_min=40.0, critical_max=140.0
))

LOINCRegistry.register(LOINCTerm(
    code="88037-4",
    long_name="Clinical Vital Sign Measurement #037",
    unit="units",
    scale_type="Quantitative",
    system_identifier="LN_SYS_037",
    category="VITAL_SIGNS",
    normal_min=60.0, normal_max=100.0,
    warning_min=50.0, warning_max=120.0,
    critical_min=40.0, critical_max=140.0
))

LOINCRegistry.register(LOINCTerm(
    code="88038-4",
    long_name="Clinical Vital Sign Measurement #038",
    unit="units",
    scale_type="Quantitative",
    system_identifier="LN_SYS_038",
    category="VITAL_SIGNS",
    normal_min=60.0, normal_max=100.0,
    warning_min=50.0, warning_max=120.0,
    critical_min=40.0, critical_max=140.0
))

LOINCRegistry.register(LOINCTerm(
    code="88039-4",
    long_name="Clinical Vital Sign Measurement #039",
    unit="units",
    scale_type="Quantitative",
    system_identifier="LN_SYS_039",
    category="VITAL_SIGNS",
    normal_min=60.0, normal_max=100.0,
    warning_min=50.0, warning_max=120.0,
    critical_min=40.0, critical_max=140.0
))

LOINCRegistry.register(LOINCTerm(
    code="88040-4",
    long_name="Clinical Vital Sign Measurement #040",
    unit="units",
    scale_type="Quantitative",
    system_identifier="LN_SYS_040",
    category="VITAL_SIGNS",
    normal_min=60.0, normal_max=100.0,
    warning_min=50.0, warning_max=120.0,
    critical_min=40.0, critical_max=140.0
))

LOINCRegistry.register(LOINCTerm(
    code="88041-4",
    long_name="Clinical Vital Sign Measurement #041",
    unit="units",
    scale_type="Quantitative",
    system_identifier="LN_SYS_041",
    category="VITAL_SIGNS",
    normal_min=60.0, normal_max=100.0,
    warning_min=50.0, warning_max=120.0,
    critical_min=40.0, critical_max=140.0
))

LOINCRegistry.register(LOINCTerm(
    code="88042-4",
    long_name="Clinical Vital Sign Measurement #042",
    unit="units",
    scale_type="Quantitative",
    system_identifier="LN_SYS_042",
    category="VITAL_SIGNS",
    normal_min=60.0, normal_max=100.0,
    warning_min=50.0, warning_max=120.0,
    critical_min=40.0, critical_max=140.0
))

LOINCRegistry.register(LOINCTerm(
    code="88043-4",
    long_name="Clinical Vital Sign Measurement #043",
    unit="units",
    scale_type="Quantitative",
    system_identifier="LN_SYS_043",
    category="VITAL_SIGNS",
    normal_min=60.0, normal_max=100.0,
    warning_min=50.0, warning_max=120.0,
    critical_min=40.0, critical_max=140.0
))

LOINCRegistry.register(LOINCTerm(
    code="88044-4",
    long_name="Clinical Vital Sign Measurement #044",
    unit="units",
    scale_type="Quantitative",
    system_identifier="LN_SYS_044",
    category="VITAL_SIGNS",
    normal_min=60.0, normal_max=100.0,
    warning_min=50.0, warning_max=120.0,
    critical_min=40.0, critical_max=140.0
))

LOINCRegistry.register(LOINCTerm(
    code="88045-4",
    long_name="Clinical Vital Sign Measurement #045",
    unit="units",
    scale_type="Quantitative",
    system_identifier="LN_SYS_045",
    category="VITAL_SIGNS",
    normal_min=60.0, normal_max=100.0,
    warning_min=50.0, warning_max=120.0,
    critical_min=40.0, critical_max=140.0
))

LOINCRegistry.register(LOINCTerm(
    code="88046-4",
    long_name="Clinical Vital Sign Measurement #046",
    unit="units",
    scale_type="Quantitative",
    system_identifier="LN_SYS_046",
    category="VITAL_SIGNS",
    normal_min=60.0, normal_max=100.0,
    warning_min=50.0, warning_max=120.0,
    critical_min=40.0, critical_max=140.0
))

LOINCRegistry.register(LOINCTerm(
    code="88047-4",
    long_name="Clinical Vital Sign Measurement #047",
    unit="units",
    scale_type="Quantitative",
    system_identifier="LN_SYS_047",
    category="VITAL_SIGNS",
    normal_min=60.0, normal_max=100.0,
    warning_min=50.0, warning_max=120.0,
    critical_min=40.0, critical_max=140.0
))

LOINCRegistry.register(LOINCTerm(
    code="88048-4",
    long_name="Clinical Vital Sign Measurement #048",
    unit="units",
    scale_type="Quantitative",
    system_identifier="LN_SYS_048",
    category="VITAL_SIGNS",
    normal_min=60.0, normal_max=100.0,
    warning_min=50.0, warning_max=120.0,
    critical_min=40.0, critical_max=140.0
))

LOINCRegistry.register(LOINCTerm(
    code="88049-4",
    long_name="Clinical Vital Sign Measurement #049",
    unit="units",
    scale_type="Quantitative",
    system_identifier="LN_SYS_049",
    category="VITAL_SIGNS",
    normal_min=60.0, normal_max=100.0,
    warning_min=50.0, warning_max=120.0,
    critical_min=40.0, critical_max=140.0
))

LOINCRegistry.register(LOINCTerm(
    code="88050-4",
    long_name="Clinical Vital Sign Measurement #050",
    unit="units",
    scale_type="Quantitative",
    system_identifier="LN_SYS_050",
    category="VITAL_SIGNS",
    normal_min=60.0, normal_max=100.0,
    warning_min=50.0, warning_max=120.0,
    critical_min=40.0, critical_max=140.0
))

LOINCRegistry.register(LOINCTerm(
    code="88051-4",
    long_name="Clinical Vital Sign Measurement #051",
    unit="units",
    scale_type="Quantitative",
    system_identifier="LN_SYS_051",
    category="VITAL_SIGNS",
    normal_min=60.0, normal_max=100.0,
    warning_min=50.0, warning_max=120.0,
    critical_min=40.0, critical_max=140.0
))

LOINCRegistry.register(LOINCTerm(
    code="88052-4",
    long_name="Clinical Vital Sign Measurement #052",
    unit="units",
    scale_type="Quantitative",
    system_identifier="LN_SYS_052",
    category="VITAL_SIGNS",
    normal_min=60.0, normal_max=100.0,
    warning_min=50.0, warning_max=120.0,
    critical_min=40.0, critical_max=140.0
))

LOINCRegistry.register(LOINCTerm(
    code="88053-4",
    long_name="Clinical Vital Sign Measurement #053",
    unit="units",
    scale_type="Quantitative",
    system_identifier="LN_SYS_053",
    category="VITAL_SIGNS",
    normal_min=60.0, normal_max=100.0,
    warning_min=50.0, warning_max=120.0,
    critical_min=40.0, critical_max=140.0
))

LOINCRegistry.register(LOINCTerm(
    code="88054-4",
    long_name="Clinical Vital Sign Measurement #054",
    unit="units",
    scale_type="Quantitative",
    system_identifier="LN_SYS_054",
    category="VITAL_SIGNS",
    normal_min=60.0, normal_max=100.0,
    warning_min=50.0, warning_max=120.0,
    critical_min=40.0, critical_max=140.0
))

LOINCRegistry.register(LOINCTerm(
    code="88055-4",
    long_name="Clinical Vital Sign Measurement #055",
    unit="units",
    scale_type="Quantitative",
    system_identifier="LN_SYS_055",
    category="VITAL_SIGNS",
    normal_min=60.0, normal_max=100.0,
    warning_min=50.0, warning_max=120.0,
    critical_min=40.0, critical_max=140.0
))

LOINCRegistry.register(LOINCTerm(
    code="88056-4",
    long_name="Clinical Vital Sign Measurement #056",
    unit="units",
    scale_type="Quantitative",
    system_identifier="LN_SYS_056",
    category="VITAL_SIGNS",
    normal_min=60.0, normal_max=100.0,
    warning_min=50.0, warning_max=120.0,
    critical_min=40.0, critical_max=140.0
))

LOINCRegistry.register(LOINCTerm(
    code="88057-4",
    long_name="Clinical Vital Sign Measurement #057",
    unit="units",
    scale_type="Quantitative",
    system_identifier="LN_SYS_057",
    category="VITAL_SIGNS",
    normal_min=60.0, normal_max=100.0,
    warning_min=50.0, warning_max=120.0,
    critical_min=40.0, critical_max=140.0
))

LOINCRegistry.register(LOINCTerm(
    code="88058-4",
    long_name="Clinical Vital Sign Measurement #058",
    unit="units",
    scale_type="Quantitative",
    system_identifier="LN_SYS_058",
    category="VITAL_SIGNS",
    normal_min=60.0, normal_max=100.0,
    warning_min=50.0, warning_max=120.0,
    critical_min=40.0, critical_max=140.0
))

LOINCRegistry.register(LOINCTerm(
    code="88059-4",
    long_name="Clinical Vital Sign Measurement #059",
    unit="units",
    scale_type="Quantitative",
    system_identifier="LN_SYS_059",
    category="VITAL_SIGNS",
    normal_min=60.0, normal_max=100.0,
    warning_min=50.0, warning_max=120.0,
    critical_min=40.0, critical_max=140.0
))

LOINCRegistry.register(LOINCTerm(
    code="88060-4",
    long_name="Clinical Vital Sign Measurement #060",
    unit="units",
    scale_type="Quantitative",
    system_identifier="LN_SYS_060",
    category="VITAL_SIGNS",
    normal_min=60.0, normal_max=100.0,
    warning_min=50.0, warning_max=120.0,
    critical_min=40.0, critical_max=140.0
))

LOINCRegistry.register(LOINCTerm(
    code="88061-4",
    long_name="Clinical Vital Sign Measurement #061",
    unit="units",
    scale_type="Quantitative",
    system_identifier="LN_SYS_061",
    category="VITAL_SIGNS",
    normal_min=60.0, normal_max=100.0,
    warning_min=50.0, warning_max=120.0,
    critical_min=40.0, critical_max=140.0
))

LOINCRegistry.register(LOINCTerm(
    code="88062-4",
    long_name="Clinical Vital Sign Measurement #062",
    unit="units",
    scale_type="Quantitative",
    system_identifier="LN_SYS_062",
    category="VITAL_SIGNS",
    normal_min=60.0, normal_max=100.0,
    warning_min=50.0, warning_max=120.0,
    critical_min=40.0, critical_max=140.0
))

LOINCRegistry.register(LOINCTerm(
    code="88063-4",
    long_name="Clinical Vital Sign Measurement #063",
    unit="units",
    scale_type="Quantitative",
    system_identifier="LN_SYS_063",
    category="VITAL_SIGNS",
    normal_min=60.0, normal_max=100.0,
    warning_min=50.0, warning_max=120.0,
    critical_min=40.0, critical_max=140.0
))

LOINCRegistry.register(LOINCTerm(
    code="88064-4",
    long_name="Clinical Vital Sign Measurement #064",
    unit="units",
    scale_type="Quantitative",
    system_identifier="LN_SYS_064",
    category="VITAL_SIGNS",
    normal_min=60.0, normal_max=100.0,
    warning_min=50.0, warning_max=120.0,
    critical_min=40.0, critical_max=140.0
))

LOINCRegistry.register(LOINCTerm(
    code="88065-4",
    long_name="Clinical Vital Sign Measurement #065",
    unit="units",
    scale_type="Quantitative",
    system_identifier="LN_SYS_065",
    category="VITAL_SIGNS",
    normal_min=60.0, normal_max=100.0,
    warning_min=50.0, warning_max=120.0,
    critical_min=40.0, critical_max=140.0
))

LOINCRegistry.register(LOINCTerm(
    code="88066-4",
    long_name="Clinical Vital Sign Measurement #066",
    unit="units",
    scale_type="Quantitative",
    system_identifier="LN_SYS_066",
    category="VITAL_SIGNS",
    normal_min=60.0, normal_max=100.0,
    warning_min=50.0, warning_max=120.0,
    critical_min=40.0, critical_max=140.0
))

LOINCRegistry.register(LOINCTerm(
    code="88067-4",
    long_name="Clinical Vital Sign Measurement #067",
    unit="units",
    scale_type="Quantitative",
    system_identifier="LN_SYS_067",
    category="VITAL_SIGNS",
    normal_min=60.0, normal_max=100.0,
    warning_min=50.0, warning_max=120.0,
    critical_min=40.0, critical_max=140.0
))

LOINCRegistry.register(LOINCTerm(
    code="88068-4",
    long_name="Clinical Vital Sign Measurement #068",
    unit="units",
    scale_type="Quantitative",
    system_identifier="LN_SYS_068",
    category="VITAL_SIGNS",
    normal_min=60.0, normal_max=100.0,
    warning_min=50.0, warning_max=120.0,
    critical_min=40.0, critical_max=140.0
))

LOINCRegistry.register(LOINCTerm(
    code="88069-4",
    long_name="Clinical Vital Sign Measurement #069",
    unit="units",
    scale_type="Quantitative",
    system_identifier="LN_SYS_069",
    category="VITAL_SIGNS",
    normal_min=60.0, normal_max=100.0,
    warning_min=50.0, warning_max=120.0,
    critical_min=40.0, critical_max=140.0
))

LOINCRegistry.register(LOINCTerm(
    code="88070-4",
    long_name="Clinical Vital Sign Measurement #070",
    unit="units",
    scale_type="Quantitative",
    system_identifier="LN_SYS_070",
    category="VITAL_SIGNS",
    normal_min=60.0, normal_max=100.0,
    warning_min=50.0, warning_max=120.0,
    critical_min=40.0, critical_max=140.0
))

LOINCRegistry.register(LOINCTerm(
    code="88071-4",
    long_name="Clinical Vital Sign Measurement #071",
    unit="units",
    scale_type="Quantitative",
    system_identifier="LN_SYS_071",
    category="VITAL_SIGNS",
    normal_min=60.0, normal_max=100.0,
    warning_min=50.0, warning_max=120.0,
    critical_min=40.0, critical_max=140.0
))

LOINCRegistry.register(LOINCTerm(
    code="88072-4",
    long_name="Clinical Vital Sign Measurement #072",
    unit="units",
    scale_type="Quantitative",
    system_identifier="LN_SYS_072",
    category="VITAL_SIGNS",
    normal_min=60.0, normal_max=100.0,
    warning_min=50.0, warning_max=120.0,
    critical_min=40.0, critical_max=140.0
))

LOINCRegistry.register(LOINCTerm(
    code="88073-4",
    long_name="Clinical Vital Sign Measurement #073",
    unit="units",
    scale_type="Quantitative",
    system_identifier="LN_SYS_073",
    category="VITAL_SIGNS",
    normal_min=60.0, normal_max=100.0,
    warning_min=50.0, warning_max=120.0,
    critical_min=40.0, critical_max=140.0
))

LOINCRegistry.register(LOINCTerm(
    code="88074-4",
    long_name="Clinical Vital Sign Measurement #074",
    unit="units",
    scale_type="Quantitative",
    system_identifier="LN_SYS_074",
    category="VITAL_SIGNS",
    normal_min=60.0, normal_max=100.0,
    warning_min=50.0, warning_max=120.0,
    critical_min=40.0, critical_max=140.0
))

LOINCRegistry.register(LOINCTerm(
    code="88075-4",
    long_name="Clinical Vital Sign Measurement #075",
    unit="units",
    scale_type="Quantitative",
    system_identifier="LN_SYS_075",
    category="VITAL_SIGNS",
    normal_min=60.0, normal_max=100.0,
    warning_min=50.0, warning_max=120.0,
    critical_min=40.0, critical_max=140.0
))

LOINCRegistry.register(LOINCTerm(
    code="88076-4",
    long_name="Clinical Vital Sign Measurement #076",
    unit="units",
    scale_type="Quantitative",
    system_identifier="LN_SYS_076",
    category="VITAL_SIGNS",
    normal_min=60.0, normal_max=100.0,
    warning_min=50.0, warning_max=120.0,
    critical_min=40.0, critical_max=140.0
))

LOINCRegistry.register(LOINCTerm(
    code="88077-4",
    long_name="Clinical Vital Sign Measurement #077",
    unit="units",
    scale_type="Quantitative",
    system_identifier="LN_SYS_077",
    category="VITAL_SIGNS",
    normal_min=60.0, normal_max=100.0,
    warning_min=50.0, warning_max=120.0,
    critical_min=40.0, critical_max=140.0
))

LOINCRegistry.register(LOINCTerm(
    code="88078-4",
    long_name="Clinical Vital Sign Measurement #078",
    unit="units",
    scale_type="Quantitative",
    system_identifier="LN_SYS_078",
    category="VITAL_SIGNS",
    normal_min=60.0, normal_max=100.0,
    warning_min=50.0, warning_max=120.0,
    critical_min=40.0, critical_max=140.0
))

LOINCRegistry.register(LOINCTerm(
    code="88079-4",
    long_name="Clinical Vital Sign Measurement #079",
    unit="units",
    scale_type="Quantitative",
    system_identifier="LN_SYS_079",
    category="VITAL_SIGNS",
    normal_min=60.0, normal_max=100.0,
    warning_min=50.0, warning_max=120.0,
    critical_min=40.0, critical_max=140.0
))

LOINCRegistry.register(LOINCTerm(
    code="88080-4",
    long_name="Clinical Vital Sign Measurement #080",
    unit="units",
    scale_type="Quantitative",
    system_identifier="LN_SYS_080",
    category="VITAL_SIGNS",
    normal_min=60.0, normal_max=100.0,
    warning_min=50.0, warning_max=120.0,
    critical_min=40.0, critical_max=140.0
))

LOINCRegistry.register(LOINCTerm(
    code="88081-4",
    long_name="Clinical Vital Sign Measurement #081",
    unit="units",
    scale_type="Quantitative",
    system_identifier="LN_SYS_081",
    category="VITAL_SIGNS",
    normal_min=60.0, normal_max=100.0,
    warning_min=50.0, warning_max=120.0,
    critical_min=40.0, critical_max=140.0
))

LOINCRegistry.register(LOINCTerm(
    code="88082-4",
    long_name="Clinical Vital Sign Measurement #082",
    unit="units",
    scale_type="Quantitative",
    system_identifier="LN_SYS_082",
    category="VITAL_SIGNS",
    normal_min=60.0, normal_max=100.0,
    warning_min=50.0, warning_max=120.0,
    critical_min=40.0, critical_max=140.0
))

LOINCRegistry.register(LOINCTerm(
    code="88083-4",
    long_name="Clinical Vital Sign Measurement #083",
    unit="units",
    scale_type="Quantitative",
    system_identifier="LN_SYS_083",
    category="VITAL_SIGNS",
    normal_min=60.0, normal_max=100.0,
    warning_min=50.0, warning_max=120.0,
    critical_min=40.0, critical_max=140.0
))

LOINCRegistry.register(LOINCTerm(
    code="88084-4",
    long_name="Clinical Vital Sign Measurement #084",
    unit="units",
    scale_type="Quantitative",
    system_identifier="LN_SYS_084",
    category="VITAL_SIGNS",
    normal_min=60.0, normal_max=100.0,
    warning_min=50.0, warning_max=120.0,
    critical_min=40.0, critical_max=140.0
))

LOINCRegistry.register(LOINCTerm(
    code="88085-4",
    long_name="Clinical Vital Sign Measurement #085",
    unit="units",
    scale_type="Quantitative",
    system_identifier="LN_SYS_085",
    category="VITAL_SIGNS",
    normal_min=60.0, normal_max=100.0,
    warning_min=50.0, warning_max=120.0,
    critical_min=40.0, critical_max=140.0
))

LOINCRegistry.register(LOINCTerm(
    code="88086-4",
    long_name="Clinical Vital Sign Measurement #086",
    unit="units",
    scale_type="Quantitative",
    system_identifier="LN_SYS_086",
    category="VITAL_SIGNS",
    normal_min=60.0, normal_max=100.0,
    warning_min=50.0, warning_max=120.0,
    critical_min=40.0, critical_max=140.0
))

LOINCRegistry.register(LOINCTerm(
    code="88087-4",
    long_name="Clinical Vital Sign Measurement #087",
    unit="units",
    scale_type="Quantitative",
    system_identifier="LN_SYS_087",
    category="VITAL_SIGNS",
    normal_min=60.0, normal_max=100.0,
    warning_min=50.0, warning_max=120.0,
    critical_min=40.0, critical_max=140.0
))

LOINCRegistry.register(LOINCTerm(
    code="88088-4",
    long_name="Clinical Vital Sign Measurement #088",
    unit="units",
    scale_type="Quantitative",
    system_identifier="LN_SYS_088",
    category="VITAL_SIGNS",
    normal_min=60.0, normal_max=100.0,
    warning_min=50.0, warning_max=120.0,
    critical_min=40.0, critical_max=140.0
))

LOINCRegistry.register(LOINCTerm(
    code="88089-4",
    long_name="Clinical Vital Sign Measurement #089",
    unit="units",
    scale_type="Quantitative",
    system_identifier="LN_SYS_089",
    category="VITAL_SIGNS",
    normal_min=60.0, normal_max=100.0,
    warning_min=50.0, warning_max=120.0,
    critical_min=40.0, critical_max=140.0
))

LOINCRegistry.register(LOINCTerm(
    code="88090-4",
    long_name="Clinical Vital Sign Measurement #090",
    unit="units",
    scale_type="Quantitative",
    system_identifier="LN_SYS_090",
    category="VITAL_SIGNS",
    normal_min=60.0, normal_max=100.0,
    warning_min=50.0, warning_max=120.0,
    critical_min=40.0, critical_max=140.0
))

LOINCRegistry.register(LOINCTerm(
    code="88091-4",
    long_name="Clinical Vital Sign Measurement #091",
    unit="units",
    scale_type="Quantitative",
    system_identifier="LN_SYS_091",
    category="VITAL_SIGNS",
    normal_min=60.0, normal_max=100.0,
    warning_min=50.0, warning_max=120.0,
    critical_min=40.0, critical_max=140.0
))

LOINCRegistry.register(LOINCTerm(
    code="88092-4",
    long_name="Clinical Vital Sign Measurement #092",
    unit="units",
    scale_type="Quantitative",
    system_identifier="LN_SYS_092",
    category="VITAL_SIGNS",
    normal_min=60.0, normal_max=100.0,
    warning_min=50.0, warning_max=120.0,
    critical_min=40.0, critical_max=140.0
))

LOINCRegistry.register(LOINCTerm(
    code="88093-4",
    long_name="Clinical Vital Sign Measurement #093",
    unit="units",
    scale_type="Quantitative",
    system_identifier="LN_SYS_093",
    category="VITAL_SIGNS",
    normal_min=60.0, normal_max=100.0,
    warning_min=50.0, warning_max=120.0,
    critical_min=40.0, critical_max=140.0
))

LOINCRegistry.register(LOINCTerm(
    code="88094-4",
    long_name="Clinical Vital Sign Measurement #094",
    unit="units",
    scale_type="Quantitative",
    system_identifier="LN_SYS_094",
    category="VITAL_SIGNS",
    normal_min=60.0, normal_max=100.0,
    warning_min=50.0, warning_max=120.0,
    critical_min=40.0, critical_max=140.0
))

LOINCRegistry.register(LOINCTerm(
    code="88095-4",
    long_name="Clinical Vital Sign Measurement #095",
    unit="units",
    scale_type="Quantitative",
    system_identifier="LN_SYS_095",
    category="VITAL_SIGNS",
    normal_min=60.0, normal_max=100.0,
    warning_min=50.0, warning_max=120.0,
    critical_min=40.0, critical_max=140.0
))

LOINCRegistry.register(LOINCTerm(
    code="88096-4",
    long_name="Clinical Vital Sign Measurement #096",
    unit="units",
    scale_type="Quantitative",
    system_identifier="LN_SYS_096",
    category="VITAL_SIGNS",
    normal_min=60.0, normal_max=100.0,
    warning_min=50.0, warning_max=120.0,
    critical_min=40.0, critical_max=140.0
))

LOINCRegistry.register(LOINCTerm(
    code="88097-4",
    long_name="Clinical Vital Sign Measurement #097",
    unit="units",
    scale_type="Quantitative",
    system_identifier="LN_SYS_097",
    category="VITAL_SIGNS",
    normal_min=60.0, normal_max=100.0,
    warning_min=50.0, warning_max=120.0,
    critical_min=40.0, critical_max=140.0
))

LOINCRegistry.register(LOINCTerm(
    code="88098-4",
    long_name="Clinical Vital Sign Measurement #098",
    unit="units",
    scale_type="Quantitative",
    system_identifier="LN_SYS_098",
    category="VITAL_SIGNS",
    normal_min=60.0, normal_max=100.0,
    warning_min=50.0, warning_max=120.0,
    critical_min=40.0, critical_max=140.0
))

LOINCRegistry.register(LOINCTerm(
    code="88099-4",
    long_name="Clinical Vital Sign Measurement #099",
    unit="units",
    scale_type="Quantitative",
    system_identifier="LN_SYS_099",
    category="VITAL_SIGNS",
    normal_min=60.0, normal_max=100.0,
    warning_min=50.0, warning_max=120.0,
    critical_min=40.0, critical_max=140.0
))

LOINCRegistry.register(LOINCTerm(
    code="88100-4",
    long_name="Clinical Vital Sign Measurement #100",
    unit="units",
    scale_type="Quantitative",
    system_identifier="LN_SYS_100",
    category="VITAL_SIGNS",
    normal_min=60.0, normal_max=100.0,
    warning_min=50.0, warning_max=120.0,
    critical_min=40.0, critical_max=140.0
))
