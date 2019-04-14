import { Validators, ValidatorFn, AbstractControl, ValidationErrors, FormArray, FormControl } from '@angular/forms';
export const passwordValidator1Fn = Validators.compose([
  Validators.required
]);
export const passwordValidator2Fn = Validators.compose([
  Validators.minLength(8),
  Validators.maxLength(16)
]);

export function compareEqual(fieldName: string): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if (!control.parent) {
      return null;
    }
    if (control.parent.get(fieldName).value === control.value) {
      return null;
    } else {
      return { compareEqual: true };
    }
  };
}

export function checkUniqEmail(control: AbstractControl): ValidationErrors | null {
  // 過濾掉沒有 value 的 FormControl
  const all = (control as FormArray).controls.filter(x => x.value);
  // 保留原本的陣列內容，以供最後對 FormControl 進行操作
  const origs = [...all];
  // 記錄所有重複的 FormControl 有哪些
  const dupes = [];
  // 計算 value 重複的邏輯，將重複的 FormControl 都放入 dupes 陣列中
  while (all.length > 0) {
    const s = all.shift();
    if (dupes.includes(s)) { continue; }
    if (all.some(x => x.value === s.value)) {
      if (!dupes.includes(s)) { dupes.push(s); }
      all.filter(x => s.value === x.value).forEach(t => {
        if (!dupes.includes(t)) { dupes.push(t); }
      });
    }
  }
  // 處理所有重複的 FormControl (加入 errors['checkUniqEmail'] 屬性)
  origs.filter(x => dupes.includes(x)).forEach(x => {
    x.markAsTouched({ onlySelf: true }); // 強迫設定為 touched 狀態
    x.setErrors(Object.assign(x.errors || {}, { checkUniqEmail: true }));
  });
  // 處理所沒有重複的 FormControl (移除 errors['checkUniqEmail'] 屬性)
  origs.filter(x => !dupes.includes(x))
    .filter(x => x.errors)
    .filter(x => x.errors.hasOwnProperty('checkUniqEmail'))
    .forEach(x => {
      delete x.errors.checkUniqEmail;
      if (Object.keys(x.errors).length === 0) {
        x.setErrors(null);
      } else {
        x.setErrors(x.errors);
      }
    });
  // 表單陣列 FormArray 不用回傳驗證結果
  return null;
}
