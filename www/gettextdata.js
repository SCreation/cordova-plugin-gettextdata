module.exports = {
  getTextdata: function(name, successCallback, errorCallback) {
    // ��1����: �������ɌĂяo���֐�
    // ��2����: �G���[���ɌĂяo���֐�
    // ��3����: �v���O�C���̖��O�iplugin.xml��feature��name�ɐݒ肵�����́j
    // ��4����: HelloWorld.java�̑�1�����ɓn�閼�O
    // ��5����: HelloWorld.java�̑�2�����ɓn��l
    cordova.exec(successCallback, errorCallback, "gettextdata", "plugin test", [name]);
  }
};