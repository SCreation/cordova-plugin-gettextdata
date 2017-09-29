package plugin.gettextdata;

import org.apache.cordova.*;
import org.json.JSONArray;
import org.json.JSONException;

public class GetTextData extends CordovaPlugin {

    @Override
    public boolean execute(String action, JSONArray data, CallbackContext callbackContext) throws JSONException {

		String name = data.getString(0);
		String message = "plugin = "+name;
		callbackContext.success(message);
	}
}