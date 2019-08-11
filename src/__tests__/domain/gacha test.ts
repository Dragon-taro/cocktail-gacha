import {
  Liqueur,
  Translator,
  Base,
  Accent,
  NonAlcoholBase,
  NonAlcoholBase2,
  NonAlcoholAccent
} from "../../domain/entity/cocktail";
import CocktailGachaService from "../../domain/service/cocktailGacha";
import NonAlcoholGachaService from "../../domain/service/NonAlcoholGacha";

// random()をmock化
const mockRandom = (num: number | number[]) => {
  const mockRandom: Math = Object.create(Math);
  if (Array.isArray(num)) {
    // クロージャーで配列で指定した順番に値を返すように
    let count = 0;
    mockRandom.random = () => {
      return num[count++] || num[0];
    };
  } else {
    mockRandom.random = () => num;
  }
  Math = mockRandom;
};

describe("random()のmock化テスト", () => {
  it("mockRandom()がMath.random()を上書きできているか", () => {
    const value = 0.5;
    mockRandom(value);

    expect(Math.random()).toBe(value);
  });

  it("配列を渡したときに指定した順番で値が返ってくるか", () => {
    const value = [0.1, 0.2, 0.3];
    mockRandom(value);

    value.forEach(i => expect(Math.random()).toBe(i));
  });
});

describe("カクテルガチャのテスト", () => {
  it("randomが0.5以上のときに隠し味がundefinedになってるか", () => {
    mockRandom(0.5);
    const gacha = new CocktailGachaService();
    const state = gacha.getState();

    expect(state.accent).toBe(undefined);
  });

  it("randomが0.5未満のときに隠し味が設定されているか", () => {
    mockRandom(0.49);
    const gacha = new CocktailGachaService();
    const state = gacha.getState();

    expect(state.accent).toBe("ベルモット");
  });

  it("randomが0.1のときに想定通りの結果になってるか", () => {
    mockRandom(0.1);
    const gacha = new CocktailGachaService();
    const state = gacha.getState();
    const expected = {
      base: "マリブ",
      base2: "パイナップル",
      name: "マリブパイナップル",
      accent: "ジン"
    };

    expect(state).toEqual(expected);
  });
});

describe("ノンアルガチャのテスト", () => {
  it("random()の3回目の値がが0.5以上のときに隠し味がundefinedになってるか", () => {
    mockRandom([0.1, 0.2, 0.5]);
    const gacha = new NonAlcoholGachaService();
    const state = gacha.getState();

    expect(state.accent).toBe(undefined);
  });

  it("randomが0.5未満のときに隠し味が設定されているか", () => {
    mockRandom([0.1, 0.2, 0.49]);
    const gacha = new NonAlcoholGachaService();
    const state = gacha.getState();

    expect(state.accent).toBe("ガムシロップ");
  });

  it("randomが[0.2, 0.6, 0.4]のときに想定通りの結果になってるか", () => {
    mockRandom([0.2, 0.6, 0.4]);
    const gacha = new NonAlcoholGachaService();
    const state = gacha.getState();
    const expected = {
      base: "パイナップル",
      base2: "ジンジャー",
      accent: "ガムシロップ",
      name: "パイナップルジンジャー"
    };

    expect(state).toEqual(expected);
  });

  it("値が被ったときにもう一度実行されているか", () => {
    mockRandom([0.9, 0.7, 0.4, 0.2, 0.6, 0.4]);
    const gacha = new NonAlcoholGachaService();
    const state = gacha.getState();
    const expected = {
      base: "パイナップル",
      base2: "ジンジャー",
      accent: "ガムシロップ",
      name: "パイナップルジンジャー"
    };

    expect(state).toEqual(expected);
  });
});

describe("翻訳のテスト", () => {
  it("Liqueurの翻訳が全部登録されているか", () => {
    const keys = Object.keys(Liqueur);
    keys
      .filter(k => /\d/.test(k))
      .map(k => Number(k))
      .forEach(k => {
        const liqueurJa = Translator[Liqueur[k]];
        expect(liqueurJa).not.toBe(undefined);
      });
  });

  it("Baseの翻訳が全部登録されているか", () => {
    const keys = Object.keys(Base);
    keys
      .filter(k => /\d/.test(k))
      .map(k => Number(k))
      .forEach(k => {
        const baseJa = Translator[Base[k]];
        expect(baseJa).not.toBe(undefined);
      });
  });

  it("Accentの翻訳が全部登録されているか", () => {
    const keys = Object.keys(Accent);
    keys
      .filter(k => /\d/.test(k))
      .map(k => Number(k))
      .forEach(k => {
        const secretJa = Translator[Accent[k]];
        expect(secretJa).not.toBe(undefined);
      });
  });

  it("NonAlcoholBaseの翻訳が全部登録されているか", () => {
    const keys = Object.keys(NonAlcoholBase);
    keys
      .filter(k => /\d/.test(k))
      .map(k => Number(k))
      .forEach(k => {
        const secretJa = Translator[NonAlcoholBase[k]];
        expect(secretJa).not.toBe(undefined);
      });
  });

  it("NonAlcoholBase2の翻訳が全部登録されているか", () => {
    const keys = Object.keys(NonAlcoholBase2);
    keys
      .filter(k => /\d/.test(k))
      .map(k => Number(k))
      .forEach(k => {
        const secretJa = Translator[NonAlcoholBase2[k]];
        expect(secretJa).not.toBe(undefined);
      });
  });

  it("NonAlcoholAccentの翻訳が全部登録されているか", () => {
    const keys = Object.keys(NonAlcoholAccent);
    keys
      .filter(k => /\d/.test(k))
      .map(k => Number(k))
      .forEach(k => {
        const secretJa = Translator[NonAlcoholAccent[k]];
        expect(secretJa).not.toBe(undefined);
      });
  });
});
