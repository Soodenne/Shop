import { RouterOutlet } from '@angular/router';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  TuiDialogModule,
  TuiAlertModule,
  TuiTextfieldControllerModule,
  TuiModeModule,
} from '@taiga-ui/core';
import {
  TuiAccordionModule,
  TuiComboBoxModule,
  TuiInputCountModule,
  TuiInputDateRangeModule,
  TuiInputMonthModule,
  TuiInputTagModule,
  TuiMarkerIconModule,
  TuiSliderModule,
  TuiSortCountriesPipeModule,
  TuiStringifyContentPipeModule,
  TuiTabsModule,
} from '@taiga-ui/kit';
// import {TuiSidebarModule} from '@taiga-ui/addon-mobile';
import {
  TuiActiveZoneModule,

  TuiFilterPipeModule,
  TuiMapperPipeModule,
  TuiValidatorModule,
} from '@taiga-ui/cdk';
import { TuiBadgeModule } from '@taiga-ui/kit';
import { TuiAutoFocusModule } from '@taiga-ui/cdk';
import { TuiInputModule } from '@taiga-ui/kit';
import { TuiSvgModule } from '@taiga-ui/core';
import { TuiButtonModule } from '@taiga-ui/core';
import { TuiAvatarModule } from '@taiga-ui/kit';
import { TuiGroupModule } from '@taiga-ui/core';
import { TuiCarouselModule } from '@taiga-ui/kit';
import { TuiIslandModule } from '@taiga-ui/kit';
import { TuiTagModule } from '@taiga-ui/kit';
import { TuiPaginationModule } from '@taiga-ui/kit';
import { TuiScrollbarModule } from '@taiga-ui/core';
import { TuiDataListModule } from '@taiga-ui/core';
import { TuiDataListWrapperModule } from '@taiga-ui/kit';
import { TuiSelectModule } from '@taiga-ui/kit';
import { TuiTableModule } from '@taiga-ui/addon-table';
import { TuiLetModule } from '@taiga-ui/cdk';
import { TuiTablePaginationModule } from '@taiga-ui/addon-table';
import { TuiCheckboxModule } from '@taiga-ui/kit';
import { TuiMoneyModule } from '@taiga-ui/addon-commerce';
import { TuiFieldErrorPipeModule } from '@taiga-ui/kit';
import { TuiErrorModule } from '@taiga-ui/core';
import { TuiInputSliderModule } from '@taiga-ui/kit';
import { TuiInputNumberModule } from '@taiga-ui/kit';
import { TuiCurrencyPipeModule } from '@taiga-ui/addon-commerce';
import { TuiInputDateModule } from '@taiga-ui/kit';
import { TuiInputPasswordModule } from '@taiga-ui/kit';
import { TuiInputPhoneModule } from '@taiga-ui/kit';
import { TuiRadioBlockModule } from '@taiga-ui/kit';
import { TuiInputTimeModule } from '@taiga-ui/kit';
import { TuiCheckboxLabeledModule } from '@taiga-ui/kit';
import { TuiTooltipModule, TuiHintModule } from '@taiga-ui/core';
import { TuiPrimitiveCheckboxModule } from '@taiga-ui/core';
import { TuiLoaderModule } from '@taiga-ui/core';
import { TuiNotificationModule } from '@taiga-ui/core';
import { TuiInputFilesModule } from '@taiga-ui/kit';
import { TuiLabelModule } from '@taiga-ui/core';
import { TuiPrimitiveTextfieldModule } from '@taiga-ui/core';
import { TuiHostedDropdownModule } from '@taiga-ui/core';
import { TuiDropdownModule } from '@taiga-ui/core';
import { TuiFilterByInputPipeModule } from '@taiga-ui/kit';
import { TuiExpandModule } from '@taiga-ui/core';
import { TuiRatingModule } from '@taiga-ui/kit';
import { TuiInputDateTimeModule } from '@taiga-ui/kit';
import { TuiActionModule } from '@taiga-ui/kit';
import {
  TuiArcChartModule,
  TuiLegendItemModule,
  TuiLineChartModule,
  TuiLineDaysChartModule,
  TuiRingChartModule,
} from '@taiga-ui/addon-charts';
import { TuiTilesModule } from '@taiga-ui/kit';
import { TuiRadioLabeledModule } from '@taiga-ui/kit';
import { TuiTextareaModule } from '@taiga-ui/kit';
import { TuiRangeModule } from '@taiga-ui/kit';
import { TuiAxesModule } from '@taiga-ui/addon-charts';
import { TuiBarChartModule } from '@taiga-ui/addon-charts';
import { TuiBarSetModule } from '@taiga-ui/addon-charts';
import { TuiStepperModule } from '@taiga-ui/kit';
import { TuiInputPhoneInternationalModule } from '@taiga-ui/kit';
import { TuiToggleModule } from '@taiga-ui/kit';
import { TuiLinkModule } from '@taiga-ui/core';
import { TuiMediaModule } from '@taiga-ui/cdk';
import { TuiProgressModule } from '@taiga-ui/kit';
import { TuiMultiSelectModule } from '@taiga-ui/kit';
import { TuiLineClampModule } from '@taiga-ui/kit';
import { TuiSidebarModule } from '@taiga-ui/addon-mobile';

const TaigaModules = [
  TuiRangeModule,
  TuiDialogModule,
  TuiBadgeModule,
  TuiAlertModule,
  TuiTextfieldControllerModule,
  TuiAccordionModule,
  TuiComboBoxModule,
  TuiMarkerIconModule,
  TuiSidebarModule,
  TuiActiveZoneModule,
  TuiValidatorModule,
  TuiInputModule,
  TuiSvgModule,
  TuiButtonModule,
  TuiAvatarModule,
  TuiGroupModule,
  TuiCarouselModule,
  TuiIslandModule,
  TuiTagModule,
  TuiPaginationModule,
  TuiScrollbarModule,
  TuiDataListModule,
  TuiDataListWrapperModule,
  TuiSelectModule,
  TuiTableModule,
  TuiLetModule,
  TuiTablePaginationModule,
  TuiCheckboxModule,
  TuiMoneyModule,
  TuiFieldErrorPipeModule,
  TuiErrorModule,
  TuiInputSliderModule,
  TuiInputNumberModule,
  TuiCurrencyPipeModule,
  TuiInputDateModule,
  TuiInputPasswordModule,
  TuiInputPhoneModule,
  TuiRadioBlockModule,
  TuiInputTimeModule,
  TuiCheckboxLabeledModule,
  TuiTooltipModule,
  TuiHintModule,
  TuiPrimitiveCheckboxModule,
  TuiLoaderModule,
  TuiNotificationModule,
  TuiInputFilesModule,
  TuiLabelModule,
  TuiPrimitiveTextfieldModule,
  TuiHostedDropdownModule,
  TuiDropdownModule,
  TuiFilterByInputPipeModule,
  TuiExpandModule,
  TuiRatingModule,
  TuiInputDateTimeModule,
  TuiActionModule,
  TuiRingChartModule,
  TuiProgressModule,
  TuiTilesModule,
  TuiRadioLabeledModule,
  TuiTextareaModule,
  TuiInputTagModule,
  TuiAutoFocusModule,
  TuiTabsModule,
  TuiInputCountModule,
  TuiStringifyContentPipeModule,
  TuiBarChartModule,
  TuiBarSetModule,
  TuiInputDateRangeModule,
  TuiInputMonthModule,
  TuiMultiSelectModule,
  TuiLineClampModule,
  TuiTextareaModule,

  //addon charts
  TuiAxesModule,
  TuiLineDaysChartModule,
  TuiLegendItemModule,
  TuiLineChartModule,
  TuiArcChartModule,

  //cdk
  TuiFilterPipeModule,
  TuiMapperPipeModule,
  TuiStepperModule,
  TuiInputPhoneInternationalModule,
  TuiSortCountriesPipeModule,
  TuiToggleModule,
  TuiLinkModule,
  TuiMediaModule,
  TuiModeModule,
  TuiSliderModule,
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule, ReactiveFormsModule, RouterOutlet, TuiSidebarModule, TuiActiveZoneModule, TuiButtonModule, TuiInputCountModule, ...TaigaModules,
  ],
  exports:[
    CommonModule, ReactiveFormsModule, RouterOutlet, TuiSidebarModule, TuiActiveZoneModule, TuiButtonModule, TuiInputCountModule, ...TaigaModules,
  ]
})
export class SharedModule { }
